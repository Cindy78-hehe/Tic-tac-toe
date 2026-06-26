import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { db } from "../db/index.js"
import { users } from "../db/schema.js"
import { eq } from "drizzle-orm"
import dotenv from "dotenv"

dotenv.config()

export const register = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" })

  try {
    const existing = await db.select().from(users).where(eq(users.username, username))
    if (existing.length > 0)
      return res.status(400).json({ error: "Username already taken" })

    const hashed = await bcrypt.hash(password, 10)
    const [newUser] = await db.insert(users).values({ username, password: hashed }).returning()

    const token = jwt.sign({ id: newUser.id, username: newUser.username }, process.env.JWT_SECRET)
    res.json({ token, username: newUser.username })
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body

  try {
    const [user] = await db.select().from(users).where(eq(users.username, username))
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" })

    const match = await bcrypt.compare(password, user.password)
    if (!match)
      return res.status(400).json({ error: "Invalid username or password" })

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)
    res.json({ token, username: user.username })
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
}