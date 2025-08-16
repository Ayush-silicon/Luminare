import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Watch() {
  const { id } = useParams()
  const videoRef = useRef(null)
  const [moodTag, setMoodTag] = useState('learn')

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${import.meta.env.VITE_API_URL}/wellness/watch/heartbeat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId: id, intervalMs: 15000, moodTag })
      }).catch(() => {})
    }, 15000)
    return () => clearInterval(interval)
  }, [id, moodTag])

  return (
    <div>
      <h2>Watching: {id}</h2>
      <label>Mood: </label>
      <select value={moodTag} onChange={e => setMoodTag(e.target.value)}>
        <option value="calm">calm</option>
        <option value="focus">focus</option>
        <option value="learn">learn</option>
        <option value="uplift">uplift</option>
      </select>
      <div style={{ marginTop: 12, background:'#000', height: 360, color:'#fff', display:'grid', placeItems:'center' }}>
        {/* Replace with real <video src=...> via CloudFront */}
        <span>Video Player Placeholder</span>
      </div>
    </div>
  )
}
