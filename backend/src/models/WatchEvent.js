import mongoose from "mongoose"
const WatchEventSchema = new mongoose.Schema({
  userId: { type: String, index: true },        // Replace with ObjectId if using your own auth
  videoId: { type: String, index: true },
  watchedMs: { type: Number, default: 0 },
  startedAt: Date,
  endedAt: Date,
  moodTag: { type: String, enum: ["calm","focus","learn","uplift","custom"], default: "learn" }
}, { timestamps: true })
export default mongoose.model("WatchEvent", WatchEventSchema)
