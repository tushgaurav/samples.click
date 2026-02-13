import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Why() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const problems = [
    {
      title: 'SYNTHETIC DATA IS LIMITED',
      desc: 'Simulated environments can never fully capture the chaos and edge cases of the real world. Your models fail when they encounter reality.',
    },
    {
      title: 'CROWDSOURCING IS INCONSISTENT',
      desc: 'Generic labeling platforms produce low-quality annotations from workers with no domain expertise. You spend months cleaning data.',
    },
    {
      title: 'IN-HOUSE COLLECTION IS EXPENSIVE',
      desc: 'Deploying hardware, hiring operators, and managing logistics costs millions. You burn runway on infrastructure instead of innovation.',
    },
  ]

  const solutions = [
    {
      title: 'AUTHENTIC DATA',
      desc: 'We deploy sensors and cameras in real factories, warehouses, hospitals, and fields. Every sample comes from actual operations.',
      stat: '100%',
      statLabel: 'REAL-WORLD DATA',
    },
    {
      title: 'EXPERT ANNOTATION',
      desc: 'Our labeling team includes domain specialists—roboticists, medical professionals, agricultural scientists—who understand your use case.',
      stat: '99.7%',
      statLabel: 'LABEL ACCURACY',
    },
    {
      title: 'TURNKEY OPERATION',
      desc: 'We handle hardware deployment, data collection, quality assurance, and delivery. You focus on training models.',
      stat: '<48H',
      statLabel: 'DELIVERY TIME',
    },
  ]

  const comparison = [
    { feature: 'Data Quality', us: '★★★★★', synthetic: '★★☆☆☆', crowdsourced: '★★★☆☆' },
    { feature: 'Edge Cases', us: '★★★★★', synthetic: '★★☆☆☆', crowdsourced: '★★★★☆' },
    { feature: 'Cost Efficiency', us: '★★★★☆', synthetic: '★★★★★', crowdsourced: '★★★☆☆' },
    { feature: 'Time to Deploy', us: '★★★★★', synthetic: '★★★★★', crowdsourced: '★★★☆☆' },
    { feature: 'Domain Expertise', us: '★★★★★', synthetic: '★☆☆☆☆', crowdsourced: '★★☆☆☆' },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: WHY</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">THE</span>
            <span className="block text-[#ff3366]">PROBLEM</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <p className="font-mono text-xl md:text-2xl leading-relaxed">
            The AI industry is built on a <span className="text-[#ff3366]">fundamental flaw</span>: most training data doesn't represent the real world. It's either simulated in pristine virtual environments or collected by crowdsourced workers with no understanding of your domain.
          </p>
          <p className="font-mono text-lg mt-8 text-[#888] leading-relaxed">
            This is why models trained on millions of samples still fail in production. The data was never real to begin with.
          </p>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// THE STATUS QUO IS BROKEN</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#0a0a0a]">
          {problems.map((p, i) => (
            <div key={p.title} className={`p-8 ${i < 2 ? 'md:border-r-2 border-[#0a0a0a]' : ''} ${i < problems.length - 1 ? 'border-b-2 md:border-b-0 border-[#0a0a0a]' : ''}`}>
              <div className="font-display text-6xl text-[#ff3366] mb-4">0{i + 1}</div>
              <h3 className="font-display text-xl mb-3">{p.title}</h3>
              <p className="font-mono text-sm text-[#666] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6 text-[#ff3366]">// THE SOLUTION</div>
          <h2 className="font-display text-6xl md:text-8xl uppercase mb-16">
            <span className="block">REAL DATA FROM</span>
            <span className="block text-[#ff3366]">REAL PLACES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#0a0a0a]">
            {solutions.map((s, i) => (
              <div key={s.title} className={`p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group ${i < 2 ? 'md:border-r-2 border-[#0a0a0a]' : ''}`}>
                <div className="font-display text-5xl mb-4 group-hover:text-[#ff3366] transition-colors">{s.stat}</div>
                <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-4">{s.statLabel}</div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="font-mono text-sm text-[#666] group-hover:text-[#888] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// COMPARISON MATRIX</div>
        <div className="border-4 border-[#0a0a0a] overflow-x-auto">
          <div className="grid grid-cols-4 min-w-[600px]">
            <div className="grid grid-cols-1 font-mono text-xs bg-[#0a0a0a] text-[#fffef8]">
              <div className="p-4 border-b border-[#333]">FEATURE</div>
              {comparison.map(c => (
                <div key={c.feature} className="p-4 border-b border-[#333] last:border-b-0">{c.feature}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 font-mono text-sm">
              <div className="p-4 border-b-2 border-r-2 border-[#0a0a0a] bg-[#ff3366] text-[#fffef8] font-bold">SAMPLES.CLICK</div>
              {comparison.map(c => (
                <div key={c.feature} className="p-4 border-b border-r-2 border-[#0a0a0a] last:border-b-0 text-[#ff3366] font-bold">{c.us}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 font-mono text-sm">
              <div className="p-4 border-b-2 border-r-2 border-[#0a0a0a] bg-[#f0f0e8]">SYNTHETIC</div>
              {comparison.map(c => (
                <div key={c.feature} className="p-4 border-b border-r-2 border-[#0a0a0a] last:border-b-0 text-[#999]">{c.synthetic}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 font-mono text-sm">
              <div className="p-4 border-b-2 border-[#0a0a0a] bg-[#f0f0e8]">CROWDSOURCED</div>
              {comparison.map(c => (
                <div key={c.feature} className="p-4 border-b border-[#0a0a0a] last:border-b-0 text-[#999]">{c.crowdsourced}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// OUR APPROACH</div>
            <h3 className="font-display text-4xl md:text-5xl uppercase mb-8">HARDWARE IN THE FIELD</h3>
            <p className="font-mono text-lg text-[#666] leading-relaxed mb-6">
              We partner with factories, hospitals, warehouses, and farms to deploy data collection hardware in their actual operating environments.
            </p>
            <p className="font-mono text-lg text-[#666] leading-relaxed mb-6">
              Every sample is captured during real operations—real workers, real conditions, real edge cases.
            </p>
            <p className="font-mono text-lg text-[#666] leading-relaxed">
              No simulations. No studios. No shortcuts.
            </p>
          </div>
          <div className="border-4 border-[#0a0a0a] p-8 bg-[#0a0a0a] text-[#fffef8]">
            <div className="font-mono text-xs mb-6 text-[#ff3366]">// INDUSTRIES WE SERVE</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'ROBOTICS',
                'HEALTHCARE',
                'MANUFACTURING',
                'AGRICULTURE',
                'LOGISTICS',
                'AUTOMOTIVE',
                'RETAIL',
                'CONSTRUCTION',
              ].map((ind) => (
                <div key={ind} className="font-mono text-sm py-2 border-l-2 border-[#ff3366] pl-3">
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">STOP PRETENDING</h2>
          <p className="font-mono text-lg mb-8">
            Synthetic data isn't real. Crowdsourced labels aren't expert. Your models deserve better.
          </p>
          <a href="/request" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            REQUEST REAL DATA →
          </a>
        </div>
      </section>
    </Layout>
  )
}
