import { Router } from "express"
import WatchEvent from "../models/WatchEvent.js"
import WellnessProfile from "../models/WellnessProfile.js"
import { requireAuth } from "../middleware/auth.js"

const router = Router()

router.post("/watch/heartbeat", requireAuth, async (req,res) => {
  const { videoId, intervalMs, moodTag } = req.body || {}
  await WatchEvent.create({
    userId: req.user.id,
    videoId,
    watchedMs: Math.max(0, Number(intervalMs || 0)),
    startedAt: new Date(Date.now() - Math.max(0, Number(intervalMs || 0))),
    endedAt: new Date(),
    moodTag: moodTag || "learn"
  })
  res.json({ ok: true })
})

router.get("/analytics", requireAuth, async (req,res) => {
  const dayStart = new Date(); dayStart.setHours(0,0,0,0)
  const agg = await WatchEvent.aggregate([
    { $match: { userId: req.user.id, createdAt: { $gte: dayStart } } },
    { $group: { _id: null, totalMs: { $sum: "$watchedMs" } } }
  ])
  const todayMs = agg?.[0]?.totalMs || 0
  res.json({ todayMs })
})

router.post("/profile", requireAuth, async (req,res) => {
  const { dailyLimitMin, breakEveryMin, reminderChannel, timezone } = req.body || {}
  const p = await WellnessProfile.findOneAndUpdate(
    { userId: req.user.id },
    { $set: { dailyLimitMin, breakEveryMin, reminderChannel, timezone } },
    { upsert: true, new: true }
  )
  res.json(p)
})

export default router
