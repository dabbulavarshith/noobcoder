javascript
import Layout from '@/components/Layout'
import { useState } from "react"

export default function Backtest() {
  const [form, setForm] = useState({
    symbol: "",
    strategy: "",
    param: "",
    start: "",
    end: "",
  })
  const [result, setResult] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // For now, just show what user entered as the "result"
    setResult(form)
  }

  return (
    <Layout>
      <h2 className="font-display text-4xl mb-4 text-gradient-genz">
        📈 Strategy Backtest
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" onSubmit={handleSubmit}>
        <label>
          Symbol
          <input name="symbol" value={form.symbol} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Strategy
          <input name="strategy" value={form.strategy} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Parameter
          <input name="param" value={form.param} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Start Date
          <input name="start" type="date" value={form.start} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          End Date
          <input name="end" type="date" value={form.end} onChange={handleChange} className="block w-full" />
        </label>
        <button type="submit" className="md:col-span-3 btn-emoji mt-2">
          🚀 Run Backtest
        </button>
      </form>
      <section>
        <h3 className="font-bold text-2xl mb-2 text-genz-accent">Result</h3>
        {!result && <div className="text-gray-400">No results yet. Try a backtest!</div>}
        {result && (
          <pre className="bg-glass p-4 rounded text-white">{JSON.stringify(result, null, 2)}</pre>
        )}
      </section>
    </Layout>
  )
}
