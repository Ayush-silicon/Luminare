import app from "./src/app.js"
import mongoose from "mongoose"

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mindtube"

;(async () => {
  await mongoose.connect(MONGODB_URI)
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
})().catch(err => {
  console.error("Startup error:", err)
  process.exit(1)
})
