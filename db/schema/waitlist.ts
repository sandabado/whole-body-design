import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const waitlist = pgTable("waitlist", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  note: text("note"),
  createdAt: timestamp("created_at").defaultNow(),
})
