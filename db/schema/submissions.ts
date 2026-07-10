import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const submissions = pgTable("submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  artistName: varchar("artist_name", { length: 255 }),
  portfolioUrl: varchar("portfolio_url", { length: 500 }),
  note: text("note"),
  status: varchar("status", { length: 50 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
})
