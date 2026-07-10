import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

const connectionString = process.env.POSTGRES_URL

type Chainable = {
  returning: () => Promise<unknown[]>
  set: (value: unknown) => Chainable
  values: (value: unknown) => Chainable
  where: (value: unknown) => Promise<unknown>
}

const chainable: Chainable = {
  returning: async () => [],
  set: () => chainable,
  values: () => chainable,
  where: async () => null,
}

const findFirst = async (query?: unknown) => {
  void query
  return null
}

const fallbackDb = {
  insert: (table?: unknown) => {
    void table
    return chainable
  },
  query: {
    circleRegistrations: { findFirst },
    consultations: { findFirst },
    memberships: { findFirst },
    products: { findFirst },
    purchases: { findFirst },
    starReadings: { findFirst },
    submissions: { findFirst },
    users: { findFirst },
    waitlist: { findFirst },
  },
  update: (table?: unknown) => {
    void table
    return chainable
  },
}

const queryClient = connectionString
  ? postgres(connectionString, { prepare: false })
  : null

export const isDatabaseConfigured = Boolean(queryClient)

export const db = queryClient
  ? drizzle(queryClient, { schema })
  : (fallbackDb as unknown as ReturnType<typeof drizzle<typeof schema>>)
