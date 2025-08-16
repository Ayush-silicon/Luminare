import express from "express"
import cors from "cors"
import wellnessRoutes from "./routes/wellness.js"
import storageRoutes from "./routes/storage.js"

const app = express()
app.use(express.json())
app.use(cors({ origin: [/localhost:5173$/, /vercel\.app$/] }))

app.get("/health", (_req,res) => res.json({ ok: true }))

app.use("/wellness", wellnessRoutes)
app.use("/storage", storageRoutes)

export default app
