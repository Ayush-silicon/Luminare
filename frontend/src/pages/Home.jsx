import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  // Placeholder feed; replace with fetch from API
  const videos = [
    { id: 'v1', title: 'Mindful Focus Session', mood: 'focus' },
    { id: 'v2', title: 'Calm Breathing Guide', mood: 'calm' }
  ]
  return (
    <div>
      <h2>Recommended</h2>
      <ul>
        {videos.map(v => (
          <li key={v.id}>
            <Link to={`/watch/${v.id}`}>{v.title}</Link> <small>({v.mood})</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
