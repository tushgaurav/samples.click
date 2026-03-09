import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { termsItems, termsLastUpdated } from '../constants/terms'

export default function Terms() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: TERMS OF SERVICE</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">TERMS OF</span>
            <span className="block text-[#ff3366]">SERVICE</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// LAST UPDATED</div>
          <p className="font-mono text-lg">{termsLastUpdated}</p>
          <p className="font-mono text-sm text-[#888] mt-4">
            Please read these terms carefully before using our platform. These terms constitute a legally binding agreement between you and Samples.click regarding your use of our services.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-[#0a0a0a]">
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">AGREEMENT TYPE</div>
            <div className="font-display text-2xl">BINDING CONTRACT</div>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">GOVERNING LAW</div>
            <div className="font-display text-2xl">CALIFORNIA, USA</div>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">DISPUTE RESOLUTION</div>
            <div className="font-display text-2xl">BINDING ARBITRATION</div>
          </div>
          <div className="p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">UPDATE FREQUENCY</div>
            <div className="font-display text-2xl">AS NEEDED</div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          {termsItems.map((term, i) => (
            <div
              key={term.id}
              className={`py-12 ${i < termsItems.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                <div className="font-display text-4xl text-[#ff3366]">{term.id}</div>
                <div>
                  <h2 className="font-display text-2xl mb-4 uppercase">{term.title}</h2>
                  <p className="font-mono text-sm leading-relaxed text-[#666]">{term.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">LEGAL INQUIRIES</h2>
          <p className="font-mono text-lg mb-8">For legal questions or dispute resolution, contact our legal team.</p>
          <a href="mailto:legal@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            LEGAL@SAMPLES.CLICK →
          </a>
        </div>
      </section>
    </Layout>
  )
}
