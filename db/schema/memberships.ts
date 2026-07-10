import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

import { users } from "./users"

export const memberships = pgTable("memberships", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  tier: varchar("tier", { length: 50 }).notNull().default("gateway"),
  status: varchar("status", { length: 50 }).default("active"),
  stripeSubscriptionId: varchar("stripe_subscription_id"),
  currentPeriodEnd: timestamp("current_period_end"),
  createdAt: timestamp("created_at").defaultNow(),
})
