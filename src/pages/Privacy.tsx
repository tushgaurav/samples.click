import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Privacy() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      id: '01',
      title: 'DATA COLLECTION',
      content: 'We collect data that you voluntarily provide when using our services, including contact information, account details, and communications with our team. Additionally, we automatically collect technical data such as IP addresses, browser types, and usage patterns to improve our platform and maintain security.',
    },
    {
      id: '02',
      title: 'USAGE ANALYTICS',
      content: 'Our platform tracks how you interact with our datasets, search queries, and download patterns. This information helps us understand user needs and improve our product offerings. We do not sell this data to third parties under any circumstances.',
    },
    {
      id: '03',
      title: 'DATA STORAGE',
      content: 'All data is stored on secure servers located in the United States with encrypted backups distributed across multiple geographic regions. We maintain industry-standard security protocols including TLS 1.3 encryption for data in transit and AES-256 encryption for data at rest.',
    },
    {
      id: '04',
      title: 'THIRD-PARTY SERVICES',
      content: 'We utilize select third-party services for payment processing, analytics, and infrastructure. These partners are bound by strict data protection agreements and are prohibited from using your data for any purpose beyond providing their services to us.',
    },
    {
      id: '05',
      title: 'YOUR RIGHTS',
      content: 'You have the right to access, correct, or delete your personal data at any time. Submit requests through your account dashboard or contact privacy@samples.click. We will respond within 30 days in accordance with applicable data protection regulations.',
    },
    {
      id: '06',
      title: 'COOKIES',
      content: 'We use essential cookies to maintain your session and security preferences. Optional analytics cookies may be enabled to help us understand platform usage. You can manage cookie preferences through your browser settings or our cookie consent banner.',
    },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: PRIVACY POLICY</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">PRIVACY</span>
            <span className="block text-[#ff3366]">POLICY</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// LAST UPDATED</div>
          <p className="font-mono text-lg">February 13, 2026</p>
          <p className="font-mono text-sm text-[#888] mt-4">
            This policy describes how Samples.click collects, uses, and protects your personal information. By using our services, you agree to the practices outlined below.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          {sections.map((section, i) => (
            <div
              key={section.id}
              className={`py-12 ${i < sections.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                <div className="font-display text-4xl text-[#ff3366]">{section.id}</div>
                <div>
                  <h2 className="font-display text-2xl mb-4 uppercase">{section.title}</h2>
                  <p className="font-mono text-sm leading-relaxed text-[#666]">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">QUESTIONS?</h2>
          <p className="font-mono text-lg mb-8">Contact our privacy team for clarification or data requests.</p>
          <a href="mailto:privacy@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            PRIVACY@SAMPLES.CLICK →
          </a>
        </div>
      </section>
    </Layout>
  )
}
