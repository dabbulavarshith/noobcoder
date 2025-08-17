javascript
import Layout from '@/components/Layout'
import { useState } from "react"

export default function Community() {
  const [threads, setThreads] = useState([
    { id: 1, title: "Welcome to Dhan Community!", author: "admin", created: "2025-08-17" },
    { id: 2, title: "Best stock screeners for Gen Z?", author: "sparktrader", created: "2025-08-17" },
  ])
  const [newThread, setNewThread] = useState("")

  function handlePostThread(e) {
    e.preventDefault()
    if (!newThread.trim()) return
    setThreads([
      ...threads,
      { id: threads.length + 1, title: newThread, author: "you", created: new Date().toISOString().slice(0, 10) }
    ])
    setNewThread("")
  }

  return (
    <Layout>
      <h2 className="font-display text-4xl mb-4 text-gradient-genz">💬 Community Threads</h2>
      <form className="mb-8 flex gap-3" onSubmit={handlePostThread}>
        <input
          className="flex-1 bg-glass p-2 rounded"
          placeholder="Start a new thread..."
          value={newThread}
          onChange={e => setNewThread(e.target.value)}
        />
        <button type="submit" className="btn-emoji">➕ Post</button>
      </form>
      <ul className="space-y-3">
        {threads.map(t => (
          <li key={t.id} className="bg-glass p-4 rounded flex justify-between items-center">
            <span className="font-bold">{t.title}</span>
            <span className="text-sm text-gray-400">by {t.author} • {t.created}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
