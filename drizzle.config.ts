import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dbCredentials: {
    url: process.env.POSTGRES_URL || "",
  },
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./db/schema/index.ts",
  strict: true,
  verbose: true,
})
