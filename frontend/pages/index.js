javascript
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center py-24">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-gradient-genz text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Gen Z Market Intelligence 🦄
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-10">
          Trade smarter, analyze deeper, and connect with your crew.<br />
          <span className="font-bold text-genz-accent">Stocks, crypto, forex, and more.</span>
        </p>
        <div className="flex gap-4">
          <a href="/screener" className="btn-emoji">🔍 Screener</a>
          <a href="/backtest" className="btn-emoji">📈 Backtest</a>
          <a href="/community" className="btn-emoji">💬 Community</a>
        </div>
      </section>
    </Layout>
  )
}
