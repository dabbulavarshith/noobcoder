javascript
import Layout from '@/components/Layout'
import { useState } from "react"

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, symbol: "AAPL", condition: "Price > 200", triggered: false },
    { id: 2, symbol: "BTCUSD", condition: "Price < 30000", triggered: true },
  ])
  const [newAlert, setNewAlert] = useState({ symbol: "", condition: "" })

  function handleChange(e) {
    setNewAlert({ ...newAlert, [e.target.name]: e.target.value })
  }

  function handleAddAlert(e) {
    e.preventDefault()
    if (!newAlert.symbol || !newAlert.condition) return
    setAlerts([
      ...alerts,
      { id: alerts.length + 1, ...newAlert, triggered: false }
    ])
    setNewAlert({ symbol: "", condition: "" })
  }

  return (
    <Layout>
      <h2 className="font-display text-4xl mb-4 text-gradient-genz">🚨 Alerts</h2>
      <form className="mb-8 flex gap-3" onSubmit={handleAddAlert}>
        <input
          className="bg-glass p-2 rounded"
          placeholder="Symbol (e.g. TSLA, BTCUSD)"
          name="symbol"
          value={newAlert.symbol}
          onChange={handleChange}
        />
        <input
          className="bg-glass p-2 rounded"
          placeholder="Condition (e.g. Price > 100)"
          name="condition"
          value={newAlert.condition}
          onChange={handleChange}
        />
        <button type="submit" className="btn-emoji">➕ Add</button>
      </form>
      <ul className="space-y-3">
        {alerts.map(a => (
          <li key={a.id} className="bg-glass p-4 rounded flex justify-between items-center">
            <span>
              <span className="font-bold">{a.symbol}</span>: {a.condition}
            </span>
            <span className={`text-sm ${a.triggered ? "text-genz-accent" : "text-gray-400"}`}>
              {a.triggered ? "Triggered!" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
