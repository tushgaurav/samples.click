import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Lander() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const datasets = [
    { name: 'MEDICAL_HANDWRITING', qty: 1000, price: 499 },
    { name: 'INDUSTRIAL_ASSEMBLY', qty: 10000, price: 2999 },
    { name: 'ROBOTIC_MANIPULATION', qty: 5500, price: 1899 },
    { name: 'AGRICULTURAL_SORTING', qty: 8200, price: 2299 },
    { name: 'WAREHOUSE_NAVIGATION', qty: 12000, price: 3499 },
  ]

  return (
    <Layout>
      <style>{`
        .glitch {
          position: relative;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.3s infinite linear alternate-reverse;
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 0.3s infinite linear alternate-reverse;
          color: #0000ff;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 10% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 2px); }
          100% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(80% 0 10% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 2px); }
        }
      `}</style>

      <section className={`px-4 md:px-6 py-12 md:py-20 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-4 md:mb-6">// SCROLL[{Math.floor(scrollY)}px]</div>
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight uppercase">
            <span className="block glitch" data-text="SAMPLES">SAMPLES</span>
            <span className="block text-[#ff3366]">FOR AI</span>
          </h1>
          <p className="font-mono text-base md:text-lg max-w-xl mt-6 md:mt-8 leading-relaxed">
            A marketplace for niche datasets. We deploy hardware in industries. We collect. We label. You click. You download. You train.
          </p>
        </div>
      </section>

      <section className={`px-4 md:px-6 py-8 md:py-12 border-t-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-6 md:mb-8">// CATALOG</div>
        
        <div className="hidden md:grid grid-cols-1 border-4 border-[#0a0a0a]">
          <div className="grid grid-cols-12 gap-0 font-mono text-xs bg-[#0a0a0a] text-[#fffef8]">
            <div className="col-span-1 p-3 border-r border-[#333]">#</div>
            <div className="col-span-5 p-3 border-r border-[#333]">DATASET</div>
            <div className="col-span-3 p-3 border-r border-[#333]">SAMPLES</div>
            <div className="col-span-3 p-3">PRICE</div>
          </div>
          {datasets.map((ds, i) => (
            <div
              key={ds.name}
              className="grid grid-cols-12 gap-0 font-mono text-sm border-t-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all cursor-pointer group"
            >
              <div className="col-span-1 p-3 border-r-2 border-[#0a0a0a] group-hover:border-[#333]">{String(i + 1).padStart(2, '0')}</div>
              <div className="col-span-5 p-3 border-r-2 border-[#0a0a0a] group-hover:border-[#333]">{ds.name}</div>
              <div className="col-span-3 p-3 border-r-2 border-[#0a0a0a] group-hover:border-[#333]">{ds.qty.toLocaleString()}</div>
              <div className="col-span-3 p-3 font-bold">${ds.price}</div>
            </div>
          ))}
        </div>

        <div className="md:hidden grid grid-cols-1 border-4 border-[#0a0a0a]">
          {datasets.map((ds, i) => (
            <div
              key={ds.name}
              className="p-4 border-t-2 border-[#0a0a0a] first:border-t-0 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-mono text-xs text-[#999]">#{String(i + 1).padStart(2, '0')}</div>
                <div className="font-display text-lg">${ds.price}</div>
              </div>
              <div className="font-display text-sm mb-1">{ds.name.replace(/_/g, ' ')}</div>
              <div className="font-mono text-xs text-[#666]">{ds.qty.toLocaleString()} samples</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-4 md:px-6 py-12 md:py-20 border-t-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { num: '01', title: 'DEPLOY', desc: 'Hardware in real factories' },
            { num: '02', title: 'COLLECT', desc: 'Authentic training data' },
            { num: '03', title: 'DELIVER', desc: 'Instant download access' },
          ].map((step, i) => (
            <div key={step.num} className={`p-6 md:p-8 ${i < 2 ? 'md:border-r-2 border-b-2 md:border-b-0 border-[#333]' : ''}`}>
              <div className="font-display text-5xl md:text-6xl text-[#ff3366] mb-4">{step.num}</div>
              <h3 className="font-display text-xl md:text-2xl mb-2">{step.title}</h3>
              <p className="font-mono text-sm text-[#888]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-4 md:px-6 py-12 md:py-20 border-t-4 border-[#0a0a0a] transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl uppercase">START NOW</h2>
            <p className="font-mono text-sm text-[#666] mt-2">No waiting. No negotiation. Click to buy.</p>
          </div>
          <button className="font-display text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors">
            GET ACCESS →
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 border-t-4 border-[#0a0a0a]">
        {[
          { v: '50+', l: 'INDUSTRIES' },
          { v: '2M+', l: 'SAMPLES' },
          { v: '99.7%', l: 'ACCURACY' },
          { v: '<48H', l: 'DELIVERY' },
        ].map((stat, i) => (
          <div key={stat.l} className={`p-4 md:p-8 text-center ${i < 3 ? 'border-r-2 md:border-r-4 border-[#0a0a0a]' : ''} ${i % 2 === 0 ? 'border-b-2 md:border-b-0 border-[#0a0a0a]' : ''}`}>
            <div className="font-display text-2xl md:text-4xl lg:text-5xl">{stat.v}</div>
            <div className="font-mono text-xs text-[#666] mt-1 md:mt-2">{stat.l}</div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
