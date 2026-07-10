import {
  boolean,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

import type { ReadingResult } from "@/lib/reading-engine"

import { users } from "./users"

export const starReadings = pgTable("star_readings", {
  id: uuid("id").primaryKey().defaultRandom(),
  birthDate: varchar("birth_date", { length: 32 }).notNull(),
  birthPlace: text("birth_place").notNull(),
  birthTime: varchar("birth_time", { length: 32 }),
  computedAt: timestamp("computed_at"),
  consentToContact: boolean("consent_to_contact").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  email: varchar("email", { length: 255 }).notNull(),
  house: varchar("house", { length: 32 }),
  phone: varchar("phone", { length: 64 }),
  readingData: jsonb("reading_data").$type<ReadingResult>(),
  status: varchar("status", { length: 50 }).default("computed").notNull(),
  userId: uuid("user_id").references(() => users.id),
})
