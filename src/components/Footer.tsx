import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './Navbar'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8]">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b-2 border-[#333]">
        <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
          <div className="font-display text-xl mb-4">SAMPLES▼CLICK</div>
          <p className="font-mono text-xs text-[#888] leading-relaxed">
            A marketplace for niche datasets. We deploy hardware in industries. We collect. We label. You click.
          </p>
        </div>
        <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
          <div className="font-mono text-xs text-[#ff3366] mb-4">// NAVIGATION</div>
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="block font-mono text-sm hover:text-[#ff3366] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
          <div className="font-mono text-xs text-[#ff3366] mb-4">// CONTACT</div>
          <div className="space-y-2 font-mono text-sm">
            <a href="mailto:hello@samples.click" className="block hover:text-[#ff3366] transition-colors">hello@samples.click</a>
            <a href="tel:+1234567890" className="block hover:text-[#ff3366] transition-colors">+1 (234) 567-890</a>
            <span>San Francisco, CA</span>
          </div>
        </div>
        <div className="p-6 md:p-8">
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
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 font-mono text-xs text-[#888]">
        <span>SAMPLES.CLICK © {new Date().getFullYear()}</span>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-[#fffef8] transition-colors">PRIVACY POLICY</Link>
          <Link to="/terms" className="hover:text-[#fffef8] transition-colors">TERMS OF SERVICE</Link>
          <Link to="/license" className="hover:text-[#fffef8] transition-colors">DATA LICENSE</Link>
        </div>
      </div>
    </footer>
  )
}
