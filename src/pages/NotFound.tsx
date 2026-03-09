import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { notFoundOptions } from '../constants/notFound'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: NOT FOUND</div>
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tight uppercase">
            <span className="block">404</span>
          </h1>
          <p className="font-mono text-xl max-w-xl mt-8 leading-relaxed">
            The page you're looking for <span className="text-[#ff3366]">doesn't exist</span>.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// WHERE TO GO</div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-4 border-[#0a0a0a]">
          {notFoundOptions.map((option, i) => (
            <Link
              key={option.id}
              to={option.to}
              className={`p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group ${i < notFoundOptions.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4 border-[#0a0a0a]' : ''}`}
            >
              <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">{option.id}</div>
              <div className="font-display text-2xl mb-2">{option.title}</div>
              <div className="font-mono text-sm text-[#666] group-hover:text-[#aaa]">{option.description}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">NEED HELP?</h2>
          <p className="font-mono text-lg mb-8">Contact our support team if you believe this is an error.</p>
          <a href="mailto:hello@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            HELLO@SAMPLES.CLICK →
          </a>
        </div>
      </section>
    </Layout>
  )
}
