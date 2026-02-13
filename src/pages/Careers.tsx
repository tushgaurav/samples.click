import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Careers() {
  const [mounted, setMounted] = useState(false)
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const jobs = [
    {
      id: 'ENG-001',
      title: 'SENIOR ML ENGINEER',
      department: 'ENGINEERING',
      location: 'SAN FRANCISCO',
      type: 'FULL-TIME',
      description: 'Lead the development of our data processing pipelines and quality assurance systems. You\'ll work directly with our deployment teams to ensure data integrity from collection to delivery.',
      requirements: [
        '5+ years experience in ML/AI systems',
        'Strong Python and PyTorch/TensorFlow expertise',
        'Experience with distributed data processing',
        'Background in computer vision or robotics preferred',
      ],
    },
    {
      id: 'OPS-002',
      title: 'DEPLOYMENT OPERATIONS LEAD',
      department: 'OPERATIONS',
      location: 'SAN FRANCISCO',
      type: 'FULL-TIME',
      description: 'Manage hardware deployments across our partner facilities. You\'ll coordinate installation, maintenance, and data collection protocols with on-site teams.',
      requirements: [
        '3+ years in operations or project management',
        'Experience with IoT or industrial hardware',
        'Excellent communication and vendor management skills',
        'Willingness to travel up to 30%',
      ],
    },
    {
      id: 'DATA-003',
      title: 'DATA QUALITY SPECIALIST',
      department: 'DATA',
      location: 'REMOTE',
      type: 'FULL-TIME',
      description: 'Ensure our datasets meet the highest quality standards. You\'ll develop annotation guidelines, train labelers, and implement quality control processes.',
      requirements: [
        '2+ years in data annotation or quality assurance',
        'Experience with annotation tools and workflows',
        'Strong attention to detail',
        'Background in a technical domain (robotics, medical, etc.) preferred',
      ],
    },
    {
      id: 'SALE-004',
      title: 'ENTERPRISE ACCOUNT EXECUTIVE',
      department: 'SALES',
      location: 'SAN FRANCISCO',
      type: 'FULL-TIME',
      description: 'Drive enterprise sales for our custom dataset offerings. You\'ll work with robotics companies, research labs, and AI teams to understand their data needs and close deals.',
      requirements: [
        '5+ years in enterprise B2B sales',
        'Experience selling to technical audiences',
        'Track record of meeting/exceeding quota',
        'Understanding of AI/ML landscape preferred',
      ],
    },
    {
      id: 'PART-005',
      title: 'PARTNERSHIP MANAGER',
      department: 'PARTNERSHIPS',
      location: 'BERLIN',
      type: 'FULL-TIME',
      description: 'Build and maintain relationships with industrial partners who host our hardware. You\'ll expand our deployment network across Europe and ensure partner satisfaction.',
      requirements: [
        '4+ years in partnerships or business development',
        'Experience in industrial/manufacturing sectors',
        'Fluent in English and German',
        'Strong negotiation and relationship-building skills',
      ],
    },
  ]

  const benefits = [
    { title: 'EQUITY', desc: 'Competitive equity package' },
    { title: 'HEALTH', desc: 'Premium medical, dental, vision' },
    { title: 'REMOTE', desc: 'Flexible work arrangements' },
    { title: 'LEARNING', desc: '$5K annual learning budget' },
    { title: 'EQUIPMENT', desc: 'Top-tier equipment budget' },
    { title: 'TIME OFF', desc: 'Unlimited PTO policy' },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: CAREERS</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">JOIN</span>
            <span className="block text-[#ff3366]">US</span>
          </h1>
          <p className="font-mono text-lg max-w-xl mt-8 text-[#666]">
            Help us build the infrastructure for the next generation of AI. Real data. Real impact.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {benefits.map((b, i) => (
            <div key={b.title} className={`p-6 text-center ${i < benefits.length - 1 ? 'border-r-2 border-[#333]' : ''}`}>
              <div className="font-display text-xl mb-2">{b.title}</div>
              <div className="font-mono text-xs text-[#888]">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="font-mono text-xs text-[#ff3366]">// OPEN POSITIONS</div>
          <div className="flex gap-2 font-mono text-xs">
            <span className="px-3 py-1 border-2 border-[#0a0a0a]">{jobs.length} OPEN</span>
          </div>
        </div>

        <div className="border-4 border-[#0a0a0a]">
          {jobs.map((job) => (
            <div key={job.id} className="border-b-2 border-[#0a0a0a] last:border-b-0">
              <button
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className="w-full text-left"
              >
                <div className="grid grid-cols-12 gap-0 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
                  <div className="col-span-12 md:col-span-5 p-4 md:p-6 flex items-center justify-between md:justify-start gap-4">
                    <div>
                      <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-1">{job.id}</div>
                      <div className="font-display text-lg">{job.title}</div>
                    </div>
                    <span className="font-mono text-2xl md:hidden transition-transform" style={{ transform: expandedJob === job.id ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </div>
                  <div className="col-span-4 p-4 md:p-6 border-l-2 border-[#0a0a0a] group-hover:border-[#333] font-mono text-xs hidden md:block">
                    {job.department}
                  </div>
                  <div className="col-span-2 p-4 md:p-6 border-l-2 border-[#0a0a0a] group-hover:border-[#333] font-mono text-xs hidden md:block">
                    {job.location}
                  </div>
                  <div className="col-span-1 p-4 md:p-6 border-l-2 border-[#0a0a0a] group-hover:border-[#333] hidden md:flex items-center justify-center">
                    <span className="font-mono text-2xl transition-transform" style={{ transform: expandedJob === job.id ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </div>
                </div>
              </button>
              
              {expandedJob === job.id && (
                <div className="p-6 md:p-8 bg-[#f8f7f0] border-t-2 border-[#0a0a0a]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="font-mono text-xs text-[#ff3366] mb-2">// DESCRIPTION</div>
                      <p className="font-mono text-sm text-[#666] leading-relaxed">{job.description}</p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#ff3366] mb-2">// REQUIREMENTS</div>
                      <ul className="font-mono text-sm text-[#666] space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#ff3366]">▸</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <span className="font-mono text-xs px-3 py-1 border-2 border-[#0a0a0a]">{job.type}</span>
                    <span className="font-mono text-xs px-3 py-1 border-2 border-[#0a0a0a]">{job.location}</span>
                    <span className="font-mono text-xs px-3 py-1 border-2 border-[#0a0a0a]">{job.department}</span>
                  </div>
                  <button className="mt-6 font-display text-sm px-8 py-3 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors">
                    APPLY NOW →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs mb-4 text-[#ff3366]">// OUR CULTURE</div>
            <h3 className="font-display text-3xl md:text-4xl uppercase mb-6">BUILT DIFFERENT</h3>
            <p className="font-mono text-lg text-[#666] leading-relaxed mb-6">
              We're not building another SaaS tool. We're building physical infrastructure that powers the AI revolution.
            </p>
            <p className="font-mono text-lg text-[#666] leading-relaxed">
              Every day, we solve problems that exist at the intersection of hardware, software, and the messy real world. It's hard work. That's why we love it.
            </p>
          </div>
          <div className="border-4 border-[#0a0a0a] grid grid-cols-2 gap-0">
            {[
              { v: '47', l: 'TEAM MEMBERS' },
              { v: '12', l: 'COUNTRIES' },
              { v: '8', l: 'TIME ZONES' },
              { v: '∞', l: 'CURIOSITY' },
            ].map((stat, i) => (
              <div key={stat.l} className={`p-6 ${i < 2 ? 'border-b-2 border-[#0a0a0a]' : ''} ${i % 2 === 0 ? 'border-r-2 border-[#0a0a0a]' : ''}`}>
                <div className="font-display text-3xl mb-1">{stat.v}</div>
                <div className="font-mono text-xs text-[#666]">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">DON'T SEE A FIT?</h2>
          <p className="font-mono text-lg mb-8">
            We're always looking for exceptional people. Send us your resume and tell us how you'd contribute.
          </p>
          <a href="mailto:careers@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            GENERAL APPLICATION →
          </a>
        </div>
      </section>
    </Layout>
  )
}
