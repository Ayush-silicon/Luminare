import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <header style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #eee', position:'sticky', top:0, background:'#fff', zIndex:10 }}>
        <Link to="/">MindTube</Link>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Wellness</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}
