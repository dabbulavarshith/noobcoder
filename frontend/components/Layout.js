javascript
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [dark, setDark] = useState(true)
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <nav className="bg-glass flex items-center justify-between p-4 mb-8 shadow-genz">
        <Link href="/" className="font-display text-2xl text-gradient-genz tracking-tight">Dhan 🚀</Link>
        <div className="flex gap-6 items-center">
          <Link href="/screener" className="hover:text-genz-accent">Screener</Link>
          <Link href="/backtest" className="hover:text-genz-accent">Backtest</Link>
          <Link href="/alerts" className="hover:text-genz-accent">Alerts</Link>
          <Link href="/community" className="hover:text-genz-accent">Community</Link>
          <button
            className="btn-emoji ml-4"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙" : "🌞"}
          </button>
        </div>
      </nav>
      <main className="container mx-auto px-4">{children}</main>
    </div>
  )
}
