import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Lander() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <div ref={containerRef} className="min-h-screen bg-[#fffef8] text-[#0a0a0a] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap');
        
        .font-display { font-family: 'Archivo Black', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        
        .marquee {
          animation: marquee 20s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
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

      <div className="fixed top-0 left-0 right-0 z-50 bg-[#fffef8] border-b-4 border-[#0a0a0a]">
        <div className="overflow-hidden py-2 border-b-2 border-[#0a0a0a]">
          <div className="marquee whitespace-nowrap font-mono text-sm">
            <span className="mx-8">▸ DATASETS FOR ROBOTICS ▸ INDUSTRIAL TRAINING DATA ▸ MEDICAL HANDWRITING ▸ ROBOTIC MANIPULATION ▸ SCALE YOUR AI ▸ </span>
            <span className="mx-8">▸ DATASETS FOR ROBOTICS ▸ INDUSTRIAL TRAINING DATA ▸ MEDICAL HANDWRITING ▸ ROBOTIC MANIPULATION ▸ SCALE YOUR AI ▸ </span>
          </div>
        </div>
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="font-display text-2xl tracking-tight">SAMPLES▼CLICK</div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <Link to="/1" className="px-3 py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all">01</Link>
            <Link to="/2" className="px-3 py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all">02</Link>
            <Link to="/3" className="px-3 py-2 border-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8]">03</Link>
            <Link to="/4" className="px-3 py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all">04</Link>
            <Link to="/5" className="px-3 py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all">05</Link>
          </div>
        </nav>
      </div>

      <main className="pt-36">
        <section className={`px-6 py-20 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-6xl">
            <div className="font-mono text-xs mb-6">// SCROLL[{Math.floor(scrollY)}px]</div>
            <h1 className="font-display text-[12vw] leading-[0.85] tracking-tight uppercase">
              <span className="block glitch" data-text="SAMPLES">SAMPLES</span>
              <span className="block text-[#ff3366]">FOR AI</span>
            </h1>
            <p className="font-mono text-lg max-w-xl mt-8 leading-relaxed">
              A marketplace for niche datasets. We deploy hardware in industries. We collect. We label. You click. You download. You train.
            </p>
          </div>
        </section>

        <section className={`px-6 py-12 border-t-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="font-mono text-xs mb-8">// CATALOG</div>
          <div className="grid grid-cols-1 border-4 border-[#0a0a0a]">
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
        </section>

        <section className={`px-6 py-20 border-t-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { num: '01', title: 'DEPLOY', desc: 'Hardware in real factories' },
              { num: '02', title: 'COLLECT', desc: 'Authentic training data' },
              { num: '03', title: 'DELIVER', desc: 'Instant download access' },
            ].map((step, i) => (
              <div key={step.num} className={`p-8 ${i < 2 ? 'border-r-2 border-[#333]' : ''}`}>
                <div className="font-display text-6xl text-[#ff3366] mb-4">{step.num}</div>
                <h3 className="font-display text-2xl mb-2">{step.title}</h3>
                <p className="font-mono text-sm text-[#888]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`px-6 py-20 border-t-4 border-[#0a0a0a] transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-6xl uppercase">START NOW</h2>
              <p className="font-mono text-sm text-[#666] mt-2">No waiting. No negotiation. Click to buy.</p>
            </div>
            <button className="font-display text-xl px-12 py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors">
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
            <div key={stat.l} className={`p-8 text-center ${i < 3 ? 'border-r-2 md:border-r-4 border-[#0a0a0a]' : ''}`}>
              <div className="font-display text-4xl md:text-5xl">{stat.v}</div>
              <div className="font-mono text-xs text-[#666] mt-2">{stat.l}</div>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t-4 border-[#0a0a0a] p-6">
        <div className="flex items-center justify-between font-mono text-xs">
          <span>SAMPLES.CLICK © {new Date().getFullYear()}</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff3366] animate-pulse" />
            SYSTEM ONLINE
          </span>
        </div>
      </footer>
    </div>
  )
}
