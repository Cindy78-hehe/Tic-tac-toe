import express from "express"

const router = express.Router()

// placeholder routes - we'll fill these in later
router.get("/history", (req, res) => {
  res.json({ message: "History route works" })
})

export default router