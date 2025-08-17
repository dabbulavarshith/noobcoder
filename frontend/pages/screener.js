javascript
import Layout from '@/components/Layout'
import { useState } from "react"

export default function Screener() {
  const [filters, setFilters] = useState({
    sector: "",
    marketCapMin: "",
    marketCapMax: "",
    volumeMin: "",
    volumeMax: "",
    rsiMin: "",
    rsiMax: "",
    assetClass: "stocks",
  })
  const [results, setResults] = useState([])

  function handleChange(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // For now, just show the filters as "results"
    setResults([filters])
  }

  return (
    <Layout>
      <h2 className="font-display text-4xl mb-4 text-gradient-genz">
        🔍 Advanced Screener
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" onSubmit={handleSubmit}>
        <label>
          Sector
          <input name="sector" value={filters.sector} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Market Cap Min
          <input name="marketCapMin" value={filters.marketCapMin} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Market Cap Max
          <input name="marketCapMax" value={filters.marketCapMax} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Volume Min
          <input name="volumeMin" value={filters.volumeMin} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Volume Max
          <input name="volumeMax" value={filters.volumeMax} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          RSI Min
          <input name="rsiMin" value={filters.rsiMin} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          RSI Max
          <input name="rsiMax" value={filters.rsiMax} onChange={handleChange} className="block w-full" />
        </label>
        <label>
          Asset Class
          <select name="assetClass" value={filters.assetClass} onChange={handleChange} className="block w-full">
            <option value="stocks">Stocks</option>
            <option value="crypto">Crypto</option>
            <option value="forex">Forex</option>
            <option value="commodities">Commodities</option>
          </select>
        </label>
        <button type="submit" className="md:col-span-3 btn-emoji mt-2">
          🔎 Screen
        </button>
      </form>
      <section>
        <h3 className="font-bold text-2xl mb-2 text-genz-accent">Results</h3>
        {results.length === 0 && <div className="text-gray-400">No results yet. Try screening!</div>}
        <pre className="bg-glass p-4 rounded text-white">{JSON.stringify(results, null, 2)}</pre>
      </section>
    </Layout>
  )
}
