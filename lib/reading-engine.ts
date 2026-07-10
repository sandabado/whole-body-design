export type BodyMatrix = {
  emotional: number
  ethereal: number
  mental: number
  physical: number
  spiritual: number
}

export type ReadingResult = {
  archetype: string
  bodyMatrix: BodyMatrix
  element: string
  house: string
  houseName: string
  primaryBody: string
  secondaryBody: string
  summary: string
}

const HOUSES = [
  { archetype: "The Builder", element: "Earth", name: "Ground", num: "I" },
  { archetype: "The Navigator", element: "Water", name: "Flow", num: "II" },
  { archetype: "The Catalyst", element: "Fire", name: "Spark", num: "III" },
  { archetype: "The Reflector", element: "Air", name: "Mirror", num: "IV" },
  { archetype: "The Architect", element: "Aether", name: "Sound", num: "V" },
  { archetype: "The Messenger", element: "Aether", name: "Voice", num: "VI" },
  { archetype: "The Weaver", element: "Air", name: "Story", num: "VII" },
  { archetype: "The Convenor", element: "Fire", name: "Gather", num: "VIII" },
  { archetype: "The Keeper", element: "Water", name: "Wisdom", num: "IX" },
  { archetype: "The Sovereign", element: "Earth", name: "Law", num: "X" },
  { archetype: "The Seer", element: "Aether", name: "Future", num: "XI" },
  { archetype: "The Anchor", element: "Earth", name: "Tribe", num: "XII" },
] as const

const BODY_NAMES: Record<keyof BodyMatrix, string> = {
  emotional: "Emotional Body (Water)",
  ethereal: "Ethereal Body (Aether)",
  mental: "Mental Body (Air)",
  physical: "Physical Body (Earth)",
  spiritual: "Spiritual Body (Fire)",
}

function parseBirthDate(birthDate: string) {
  const [year, month, day] = birthDate.split("-").map(Number)
  if (!year || !month || !day) return null

  return {
    day,
    month,
    seed: Date.UTC(year, month - 1, day),
  }
}

function seededPercent(
  seed: number,
  offset: number,
  min: number,
  spread: number
) {
  const x = Math.sin(seed + offset) * 10000
  const fraction = x - Math.floor(x)
  return min + Math.floor(fraction * spread)
}

export function computePlaceholderReading(
  birthDate: string,
  birthTime: string | null,
  birthPlace: string
): ReadingResult {
  const parsed = parseBirthDate(birthDate)
  const month = parsed?.month || 1
  const day = parsed?.day || 1
  const seed =
    (parsed?.seed || Date.now()) +
    birthPlace.length * 17 +
    (birthTime ? birthTime.length * 31 : 0)

  const houseIndex = (month - 1 + (day > 15 ? 1 : 0)) % HOUSES.length
  const house = HOUSES[houseIndex]

  const rawScores: BodyMatrix = {
    emotional: seededPercent(seed, 4, 10, 25),
    ethereal: seededPercent(seed, 5, 5, 20),
    mental: seededPercent(seed, 1, 15, 25),
    physical: seededPercent(seed, 2, 15, 25),
    spiritual: seededPercent(seed, 3, 10, 25),
  }

  const total = Object.values(rawScores).reduce((sum, score) => sum + score, 0)
  const roundedEntries = Object.entries(rawScores).map(([key, value]) => [
    key,
    Math.round((value / total) * 100),
  ]) as [keyof BodyMatrix, number][]

  const roundedTotal = roundedEntries.reduce((sum, [, value]) => sum + value, 0)
  roundedEntries[0][1] += 100 - roundedTotal

  const bodyMatrix = Object.fromEntries(roundedEntries) as BodyMatrix
  const sortedBodies = Object.entries(bodyMatrix).sort((a, b) => b[1] - a[1])
  const primaryBody = BODY_NAMES[sortedBodies[0][0] as keyof BodyMatrix]
  const secondaryBody = BODY_NAMES[sortedBodies[1][0] as keyof BodyMatrix]

  return {
    archetype: house.archetype,
    bodyMatrix,
    element: house.element,
    house: house.num,
    houseName: house.name,
    primaryBody,
    secondaryBody,
    summary: `You are House ${house.num}: ${house.name}. Your archetype is ${house.archetype}, and your primary element is ${house.element}. Your dominant energy center is ${primaryBody}, supported by ${secondaryBody}. The Dodecahedron has twelve rooms. You were born into this one. Your Whole Body Design Reading is the beginning of the map, not the end.`,
  }
}
