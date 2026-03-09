import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/request', label: 'REQUEST' },
  { path: '/why', label: 'WHY' },
  { path: '/careers', label: 'CAREERS' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#fffef8] border-b-4 border-[#0a0a0a]">
        <div className="overflow-hidden py-2 border-b-2 border-[#0a0a0a]">
          <div className="marquee whitespace-nowrap font-mono text-sm">
            <span className="mx-8">▸ DATASETS FOR ROBOTICS ▸ INDUSTRIAL TRAINING DATA ▸ MEDICAL HANDWRITING ▸ ROBOTIC MANIPULATION ▸ SCALE YOUR AI ▸ </span>
            <span className="mx-8">▸ DATASETS FOR ROBOTICS ▸ INDUSTRIAL TRAINING DATA ▸ MEDICAL HANDWRITING ▸ ROBOTIC MANIPULATION ▸ SCALE YOUR AI ▸ </span>
          </div>
        </div>
        <nav className="flex items-center justify-between px-4 md:px-6 py-4">
          <Link to="/" className="font-display text-xl md:text-2xl tracking-tight hover:text-[#ff3366] transition-colors">
            SAMPLES▼CLICK
          </Link>
          
          <div className="hidden md:flex items-center gap-2 font-mono text-xs">
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

          <button
            className="md:hidden p-2 border-2 border-[#0a0a0a] font-mono text-xs"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </nav>
      </div>

      <div
        className={`mobile-menu fixed top-[100px] left-0 right-0 bottom-0 z-40 bg-[#fffef8] border-t-4 border-[#0a0a0a] ${mobileMenuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col p-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 px-6 font-mono text-lg border-b-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all ${isActive(item.path) ? 'bg-[#0a0a0a] text-[#fffef8]' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export { navItems }
