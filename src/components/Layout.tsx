import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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

        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }
      `}</style>

      <Navbar />

      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>

      <Footer />
    </div>
  )
}
