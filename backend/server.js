import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import gameRoutes from "./routes/game.js"

dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/game", gameRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Tic Tac Toe API is running!" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})