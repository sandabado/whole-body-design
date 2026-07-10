import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const circleRegistrations = pgTable("circle_registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  circleType: varchar("circle_type", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})
