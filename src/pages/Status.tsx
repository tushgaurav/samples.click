import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

const serviceChecks = [
  { name: 'INGESTION API', status: 'OPERATIONAL', latency: '112ms', uptime: '99.99%' },
  { name: 'LABEL PIPELINE', status: 'OPERATIONAL', latency: '184ms', uptime: '99.95%' },
  { name: 'ASSET CDN', status: 'OPERATIONAL', latency: '68ms', uptime: '100.00%' },
  { name: 'EXPORT QUEUE', status: 'DEGRADED', latency: '521ms', uptime: '99.76%' },
]

const incidents = [
  { date: 'MAR 08, 2026', title: 'EXPORT QUEUE LATENCY SPIKE', detail: 'Resolved in 24m. Backlog drained and throughput normalized.' },
  { date: 'MAR 04, 2026', title: 'S3 REGION FAILOVER TEST', detail: 'Planned drill completed successfully. No customer impact.' },
  { date: 'FEB 25, 2026', title: 'LABEL PIPELINE MAINTENANCE', detail: 'Scheduled maintenance window completed ahead of time.' },
]

export default function Status() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const activeIncidents = serviceChecks.filter((service) => service.status !== 'OPERATIONAL').length

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: STATUS</div>
          <h1 className="font-display text-[10vw] leading-[0.88] tracking-tight uppercase">
            <span className="block">SYSTEM</span>
            <span className="block text-[#ff3366]">STATUS</span>
          </h1>
          <p className="font-mono text-lg max-w-2xl mt-8 text-[#666]">
            Live health snapshot for data ingestion, labeling, and delivery systems.
            We publish incidents here in real time.
          </p>
        </div>
      </section>

      <section className={`px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[#333]">
          <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
            <div className="font-mono text-xs text-[#ff3366] mb-3">// GLOBAL STATE</div>
            <div className="flex items-center gap-3 font-display text-3xl">
              <span className={`w-3 h-3 ${activeIncidents === 0 ? 'bg-[#00ff66]' : 'bg-[#ff3366]'} animate-pulse`} />
              {activeIncidents === 0 ? 'OPERATIONAL' : 'DEGRADED'}
            </div>
          </div>
          <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#333]">
            <div className="font-mono text-xs text-[#ff3366] mb-3">// ACTIVE INCIDENTS</div>
            <div className="font-display text-4xl">{activeIncidents}</div>
          </div>
          <div className="p-6">
            <div className="font-mono text-xs text-[#ff3366] mb-3">// LAST UPDATED (UTC)</div>
            <div className="font-mono text-lg">{currentTime.toLocaleTimeString('en-US', { hour12: false })}</div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-6 text-[#ff3366]">// COMPONENT HEALTH</div>
        <div className="border-4 border-[#0a0a0a]">
          <div className="hidden md:grid grid-cols-12 bg-[#0a0a0a] text-[#fffef8] font-mono text-xs">
            <div className="col-span-4 p-3 border-r border-[#333]">SERVICE</div>
            <div className="col-span-3 p-3 border-r border-[#333]">STATUS</div>
            <div className="col-span-2 p-3 border-r border-[#333]">LATENCY</div>
            <div className="col-span-3 p-3">UPTIME (30D)</div>
          </div>

          {serviceChecks.map((service) => (
            <div key={service.name} className="border-t-2 border-[#0a0a0a] first:border-t-0">
              <div className="hidden md:grid grid-cols-12 font-mono text-sm hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-colors">
                <div className="col-span-4 p-3 border-r-2 border-[#0a0a0a]">{service.name}</div>
                <div className="col-span-3 p-3 border-r-2 border-[#0a0a0a]">
                  <span className="inline-flex items-center gap-2">
                    <span className={`w-2 h-2 ${service.status === 'OPERATIONAL' ? 'bg-[#00ff66]' : 'bg-[#ff3366]'}`} />
                    {service.status}
                  </span>
                </div>
                <div className="col-span-2 p-3 border-r-2 border-[#0a0a0a]">{service.latency}</div>
                <div className="col-span-3 p-3 font-bold">{service.uptime}</div>
              </div>

              <div className="md:hidden p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg">{service.name}</div>
                  <span className={`w-2 h-2 ${service.status === 'OPERATIONAL' ? 'bg-[#00ff66]' : 'bg-[#ff3366]'}`} />
                </div>
                <div className="font-mono text-xs mt-2 text-[#666]">
                  {service.status} | {service.latency} | {service.uptime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-6 text-[#ff3366]">// RECENT INCIDENT LOG</div>
        <div className="grid grid-cols-1 gap-4">
          {incidents.map((incident) => (
            <article key={incident.title} className="border-2 border-[#0a0a0a] p-6 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-colors">
              <div className="font-mono text-xs text-[#ff3366] mb-2">{incident.date}</div>
              <h2 className="font-display text-2xl mb-2">{incident.title}</h2>
              <p className="font-mono text-sm text-[#666] hover:text-[#bfbfbf] transition-colors">{incident.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
