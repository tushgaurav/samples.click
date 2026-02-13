import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const team = [
    { name: 'MARCUS CHEN', role: 'FOUNDER/CEO', id: '001' },
    { name: 'SARAH OKONKWO', role: 'CTO', id: '002' },
    { name: 'DAVE RODRIGUEZ', role: 'HEAD OF OPS', id: '003' },
    { name: 'JENNIFER PARK', role: 'LEAD ENGINEER', id: '004' },
    { name: 'ALEX NOVAK', role: 'DATA SCIENTIST', id: '005' },
    { name: 'PRIYA SHARMA', role: 'QUALITY LEAD', id: '006' },
  ]

  const milestones = [
    { year: '2019', event: 'FOUNDED IN SAN FRANCISCO' },
    { year: '2020', event: 'FIRST 100 INDUSTRIAL PARTNERSHIPS' },
    { year: '2021', event: 'SERIES A: $12M RAISED' },
    { year: '2022', event: 'EXPANDED TO EUROPE & ASIA' },
    { year: '2023', event: '1M+ SAMPLES DELIVERED' },
    { year: '2024', event: '50+ ACTIVE INDUSTRIES' },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: ABOUT</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">WHO WE</span>
            <span className="block text-[#ff3366]">ARE</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// MISSION</div>
          <p className="font-mono text-xl md:text-2xl leading-relaxed">
            We believe that the bottleneck to AI progress isn't algorithms—it's <span className="bg-[#0a0a0a] text-[#fffef8] px-2">DATA</span>. Real data. Authentic data. Data from the messy, complex world of actual industrial operations.
          </p>
          <p className="font-mono text-lg mt-8 text-[#666] leading-relaxed">
            Samples.click was founded on a simple observation: robotics companies were spending millions collecting training data that was either synthetic (low fidelity) or outsourced to crowdsourcing platforms (inconsistent quality). We built something better.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// MILESTONES</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {milestones.map((m, i) => (
            <div key={m.year} className={`p-6 ${i < milestones.length - 1 ? 'border-r-2 border-[#333]' : ''}`}>
              <div className="font-display text-4xl text-[#ff3366] mb-2">{m.year}</div>
              <div className="font-mono text-xs leading-relaxed">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// THE TEAM</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-4 border-[#0a0a0a]">
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group ${
                i < team.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a]' : ''
              } ${i >= 3 && i < team.length - 1 ? 'lg:border-r-2' : ''}`}
            >
              <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">ID: {member.id}</div>
              <div className="font-display text-2xl mb-1">{member.name}</div>
              <div className="font-mono text-sm text-[#ff3366]">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// HEADQUARTERS</div>
            <div className="font-display text-3xl mb-4">SAN FRANCISCO</div>
            <div className="font-mono text-sm text-[#666] space-y-1">
              <p>548 Market Street, Suite 72</p>
              <p>San Francisco, CA 94104</p>
              <p>United States</p>
            </div>
          </div>
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// SATELLITE OFFICES</div>
            <div className="space-y-6">
              <div>
                <div className="font-display text-xl">BERLIN</div>
                <div className="font-mono text-sm text-[#666]">Friedrichstraße 123, 10117</div>
              </div>
              <div>
                <div className="font-display text-xl">TOKYO</div>
                <div className="font-mono text-sm text-[#666]">Shibuya-ku, 150-0002</div>
              </div>
              <div>
                <div className="font-display text-xl">SINGAPORE</div>
                <div className="font-mono text-sm text-[#666]">Marina Bay Financial Centre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">WORK WITH US</h2>
          <p className="font-mono text-lg mb-8">Join a team that's shaping the future of AI training data.</p>
          <a href="/careers" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            VIEW OPENINGS →
          </a>
        </div>
      </section>
    </Layout>
  )
}
