import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

import { users } from "./users"

export const consultations = pgTable("consultations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  type: varchar("type", { length: 50 }).notNull(),
  notes: text("notes"),
  stripePaymentId: varchar("stripe_payment_id", { length: 255 }),
  status: varchar("status", { length: 50 }).default("pending"),
  scheduledAt: timestamp("scheduled_at"),
  createdAt: timestamp("created_at").defaultNow(),
})
