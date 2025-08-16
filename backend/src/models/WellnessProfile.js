import mongoose from "mongoose"
const WellnessProfileSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  dailyLimitMin: { type: Number, default: 60 },
  breakEveryMin: { type: Number, default: 20 },
  reminderChannel: { type: String, enum: ["inapp","email"], default: "inapp" },
  timezone: { type: String, default: "Asia/Kolkata" }
}, { timestamps: true })
export default mongoose.model("WellnessProfile", WellnessProfileSchema)
