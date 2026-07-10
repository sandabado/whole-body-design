import { chromium, devices } from "@playwright/test"

const targets = [
  {
    name: "desktop",
    options: { viewport: { width: 1440, height: 1000 } },
  },
  {
    name: "mobile",
    options: {
      ...devices["iPhone 14"],
    },
  },
]

async function sampleCanvas(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector("canvas")
    if (!canvas) {
      return { hasCanvas: false, nonBlankSamples: 0, width: 0, height: 0 }
    }

    const width = canvas.width
    const height = canvas.height
    const probe = document.createElement("canvas")
    probe.width = width
    probe.height = height
    const context = probe.getContext("2d", { willReadFrequently: true })
    if (!context) {
      return { hasCanvas: true, nonBlankSamples: 0, width, height }
    }

    context.drawImage(canvas, 0, 0)
    const samples = [
      [0.25, 0.25],
      [0.5, 0.5],
      [0.75, 0.25],
      [0.25, 0.75],
      [0.75, 0.75],
      [0.5, 0.2],
      [0.5, 0.8],
    ]

    let nonBlankSamples = 0
    for (const [xRatio, yRatio] of samples) {
      const x = Math.max(0, Math.min(width - 1, Math.floor(width * xRatio)))
      const y = Math.max(0, Math.min(height - 1, Math.floor(height * yRatio)))
      const [r, g, b, a] = context.getImageData(x, y, 1, 1).data
      if (a > 0 && r + g + b > 8) {
        nonBlankSamples += 1
      }
    }

    return { hasCanvas: true, nonBlankSamples, width, height }
  })
}

async function run() {
  const browser = await chromium.launch()
  const results = []
  const routeChecks = [
    "/mission",
    "/pillars",
    "/guild",
    "/manuals",
    "/manuals/vol-i",
    "/store",
    "/reading",
    "/press/vol-i",
    "/foundation/blueprint",
    "/legal/privacy",
  ]

  try {
    for (const target of targets) {
      const context = await browser.newContext(target.options)
      const page = await context.newPage()

      const errors = []
      page.on("pageerror", (error) => errors.push(error.message))
      page.on("console", (message) => {
        if (message.type() === "error") {
          errors.push(message.text())
        }
      })

      await page.goto("http://localhost:3001", { waitUntil: "networkidle" })
      await page.waitForSelector("canvas", { timeout: 15000 })
      await page.waitForTimeout(1200)

      const firstSample = await sampleCanvas(page)
      await page.screenshot({
        fullPage: false,
        path: `/private/tmp/whole-body-design-${target.name}-hero.png`,
      })

      await page.locator("text=Visit the Store").scrollIntoViewIfNeeded()
      await page.waitForTimeout(900)
      const scrolledSample = await sampleCanvas(page)
      await page.screenshot({
        fullPage: false,
        path: `/private/tmp/whole-body-design-${target.name}-pathways.png`,
      })

      const portalCount = await page.locator("#portal").count()
      const primaryLinks = await page
        .locator(
          'a[href="/mission"], a[href="/pillars"], a[href="/guild"], a[href="/store"], a[href="/reading"]'
        )
        .count()

      for (const route of routeChecks) {
        const response = await page.goto(`http://localhost:3001${route}`, {
          waitUntil: "networkidle",
        })
        if (!response || response.status() >= 400) {
          errors.push(`${route}: status ${response?.status() || "missing"}`)
        }
      }

      results.push({
        errors,
        firstSample,
        primaryLinks,
        portalCount,
        scrolledSample,
        target: target.name,
      })

      await context.close()
    }
  } finally {
    await browser.close()
  }

  console.log(JSON.stringify(results, null, 2))

  for (const result of results) {
    if (result.errors.length) {
      throw new Error(`${result.target}: browser errors: ${result.errors.join(" | ")}`)
    }
    if (result.portalCount !== 1) {
      throw new Error(`${result.target}: portal route shell missing`)
    }
    if (result.primaryLinks < 5) {
      throw new Error(`${result.target}: primary nav links missing`)
    }
    if (!result.firstSample.hasCanvas || !result.scrolledSample.hasCanvas) {
      throw new Error(`${result.target}: canvas missing`)
    }
    if (
      result.firstSample.nonBlankSamples < 1 ||
      result.scrolledSample.nonBlankSamples < 1
    ) {
      throw new Error(`${result.target}: canvas appears blank`)
    }
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
