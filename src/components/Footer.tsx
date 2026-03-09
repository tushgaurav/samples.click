import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, contact, legalLinks, navItems } from '../constants/globals'

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
          <div className="font-display text-xl mb-4">{brand.name}</div>
          <p className="font-mono text-xs text-[#888] leading-relaxed">
            {brand.tagline}
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
            <a href={`mailto:${contact.email}`} className="block hover:text-[#ff3366] transition-colors">{contact.email}</a>
            <a href={contact.phoneHref} className="block hover:text-[#ff3366] transition-colors">{contact.phone}</a>
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <Link to="/status" className="inline-block font-mono text-xs text-[#ff3366] mb-4 hover:text-[#fffef8] transition-colors">
            // SYSTEM STATUS
          </Link>
          <div className="font-mono text-sm space-y-2">
            <Link to="/status" className="flex items-center gap-2 hover:text-[#ff3366] transition-colors">
              <span className="w-2 h-2 bg-[#00ff00] animate-pulse" />
              ALL SYSTEMS OPERATIONAL
            </Link>
            <div className="text-[#888]">
              {currentTime.toLocaleTimeString('en-US', { hour12: false })} UTC
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 font-mono text-xs text-[#888]">
        <span>SAMPLES.CLICK © {new Date().getFullYear()}</span>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
          {legalLinks.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-[#fffef8] transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
