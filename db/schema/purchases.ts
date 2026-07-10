import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

import { products } from "./products"
import { users } from "./users"

export const purchases = pgTable("purchases", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  productId: uuid("product_id").references(() => products.id),
  stripeCheckoutSessionId: varchar("stripe_checkout_session_id"),
  status: varchar("status", { length: 50 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
})
