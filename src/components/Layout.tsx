import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/request', label: 'REQUEST' },
    { path: '/why', label: 'WHY' },
    { path: '/careers', label: 'CAREERS' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#fffef8] text-[#0a0a0a] flex flex-col">
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
        
        .nav-active {
          background: #0a0a0a !important;
          color: #fffef8 !important;
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
          <Link to="/" className="font-display text-2xl tracking-tight hover:text-[#ff3366] transition-colors">
            SAMPLES▼CLICK
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all ${isActive(item.path) ? 'nav-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <main className="flex-1 pt-28">
        {children}
      </main>

      <footer className="border-t-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8]">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b-2 border-[#333]">
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
            <div className="font-display text-xl mb-4">SAMPLES▼CLICK</div>
            <p className="font-mono text-xs text-[#888] leading-relaxed">
              A marketplace for niche datasets. We deploy hardware in industries. We collect. We label. You click.
            </p>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
            <div className="font-mono text-xs text-[#ff3366] mb-4">// NAVIGATION</div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="block font-mono text-sm hover:text-[#ff3366] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
            <div className="font-mono text-xs text-[#ff3366] mb-4">// CONTACT</div>
            <div className="space-y-2 font-mono text-sm">
              <a href="mailto:hello@samples.click" className="block hover:text-[#ff3366] transition-colors">hello@samples.click</a>
              <a href="tel:+1234567890" className="block hover:text-[#ff3366] transition-colors">+1 (234) 567-890</a>
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="p-8">
            <div className="font-mono text-xs text-[#ff3366] mb-4">// SYSTEM STATUS</div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00ff00] animate-pulse" />
                ALL SYSTEMS OPERATIONAL
              </div>
              <div className="text-[#888]">
                {currentTime.toLocaleTimeString('en-US', { hour12: false })} UTC
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between p-6 font-mono text-xs text-[#888]">
          <span>SAMPLES.CLICK © {new Date().getFullYear()}</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#fffef8] transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-[#fffef8] transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-[#fffef8] transition-colors">DATA LICENSE</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
