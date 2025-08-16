import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [todayMs, setTodayMs] = useState(0)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/wellness/analytics`)
      .then(r => r.json()).then(d => setTodayMs(d.todayMs||0)).catch(() => {})
  }, [])

  const minutes = Math.floor(todayMs/60000)
  const seconds = Math.floor((todayMs%60000)/1000)

  return (
    <div>
      <h2>Wellness Dashboard</h2>
      <p>Today's Watch Time: <b>{minutes}m {seconds}s</b></p>
      <p>Set your limits and take mindful breaks.</p>
    </div>
  )
}
