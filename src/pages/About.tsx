import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {
  team,
  milestones,
  pageTitle,
  mission,
  headquarters,
  locationCoordinates,
} from '../constants/about'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: ABOUT</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">{pageTitle.line1}</span>
            <span className="block text-[#ff3366]">{pageTitle.line2}</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// MISSION</div>
          <p className="font-mono text-xl md:text-2xl leading-relaxed">
            {mission.mainText.before}
            <span className="bg-[#0a0a0a] text-[#fffef8] px-2">{mission.mainText.highlight}</span>
            {mission.mainText.after}
          </p>
          <p className="font-mono text-lg mt-8 text-[#666] leading-relaxed">
            {mission.subText}
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// MILESTONES</div>
        <div className="flex items-center">
          {milestones.map((m) => (
            <div key={m.year} className="p-6">
              <div className="font-display text-4xl text-[#ff3366] mb-2">{m.year}</div>
              <div className="font-mono text-xs leading-relaxed">{m.event}</div>
            </div>
          ))}
          <div className="p-6 border-l-2 border-[#333]">
            <div className="font-display text-4xl text-[#333] mb-2">????</div>
            <div className="font-mono text-xs leading-relaxed text-[#666]">YOUR GUESS IS AS GOOD AS OURS</div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// THE TEAM</div>
        <div className="border-4 border-[#0a0a0a] max-w-md">
          {team.map((member) => (
            <a
              key={member.id}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group"
            >
              <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">ID: {member.id}</div>
              <div className="font-display text-2xl mb-1">{member.name}</div>
              <div className="font-mono text-sm text-[#ff3366]">{member.role}</div>
              <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mt-3">{member.link} →</div>
            </a>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// HEADQUARTERS</div>
            <div className="font-display text-3xl mb-4">{headquarters.city}</div>
            <div className="font-mono text-sm text-[#666] space-y-1">
              {headquarters.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// LOCATION</div>
            <div className="border-2 border-[#0a0a0a] p-6">
              <div className="grid grid-cols-5 grid-rows-5 gap-1 mb-6">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 border border-[#e0e0e0] ${
                      i === 12 ? 'bg-[#ff3366] border-[#ff3366]' : ''
                    } ${
                      [7, 11, 13, 17].includes(i) ? 'bg-[#0a0a0a] border-[#0a0a0a]' : ''
                    }`}
                  />
                ))}
              </div>
              <div className="font-mono text-xs text-[#999] space-y-2">
                <div className="flex justify-between">
                  <span>LAT</span>
                  <span className="text-[#0a0a0a]">{locationCoordinates.lat}</span>
                </div>
                <div className="flex justify-between">
                  <span>LNG</span>
                  <span className="text-[#0a0a0a]">{locationCoordinates.lng}</span>
                </div>
              </div>
              <div className="font-mono text-xs text-[#ff3366] mt-4">▼ NOIDA, INDIA</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">WORK WITH US</h2>
          <p className="font-mono text-lg mb-8">Join a team that&apos;s shaping the future of AI training data.</p>
          <a
            href="/careers"
            className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors"
          >
            VIEW OPENINGS →
          </a>
        </div>
      </section>
    </Layout>
  )
}
