import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  player1Id: integer("player1_id").references(() => users.id),
  player2Id: integer("player2_id").references(() => users.id),
  status: text("status").default("waiting"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  roomId: integer("room_id").references(() => rooms.id),
  player1Id: integer("player1_id").references(() => users.id),
  player2Id: integer("player2_id").references(() => users.id),
  winnerId: integer("winner_id").references(() => users.id),
  result: text("result"),
  score: text("score"),
  createdAt: timestamp("created_at").defaultNow(),
})