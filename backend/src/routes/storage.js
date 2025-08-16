import { Router } from "express"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { requireAuth } from "../middleware/auth.js"

const router = Router()
const s3 = new S3Client({ region: process.env.AWS_REGION || "ap-south-1" })

router.post("/presign-upload", requireAuth, async (req,res) => {
  const { fileName, contentType } = req.body || {}
  const key = `videos/${req.user.id}/${Date.now()}-${(fileName||"upload.bin").replace(/[^a-zA-Z0-9.\-_]/g,"_")}`
  const url = await getSignedUrl(
    s3,
    new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: contentType || "application/octet-stream"
    }),
    { expiresIn: 60 }
  )
  res.json({ url, key })
})

export default router
