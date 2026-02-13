import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Terms() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const terms = [
    {
      id: '01',
      title: 'ACCEPTANCE OF TERMS',
      content: 'By accessing or using Samples.click services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform. These terms apply to all visitors, users, and others who access or use the service.',
    },
    {
      id: '02',
      title: 'ACCOUNT RESPONSIBILITIES',
      content: 'You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms.',
    },
    {
      id: '03',
      title: 'DATASET USAGE',
      content: 'All datasets purchased or downloaded through Samples.click are provided under specific license terms that accompany each dataset. You may not redistribute, resell, or use datasets for purposes not permitted by the applicable license. Commercial use requires appropriate licensing. Violation of license terms may result in termination of access and legal action.',
    },
    {
      id: '04',
      title: 'INTELLECTUAL PROPERTY',
      content: 'The Samples.click platform, including its original content, features, and functionality, is owned by Samples.click and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. Our trademarks and trade dress may not be used without prior written consent.',
    },
    {
      id: '05',
      title: 'PAYMENT TERMS',
      content: 'Payment for datasets and services is processed through our authorized payment processors. All fees are non-refundable except as expressly stated in our refund policy. We reserve the right to modify pricing at any time, with changes taking effect for subsequent purchases. Outstanding balances accrue interest at 1.5% per month.',
    },
    {
      id: '06',
      title: 'LIMITATION OF LIABILITY',
      content: 'Samples.click and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses. Our total liability shall not exceed the amount paid by you in the twelve months preceding any claim.',
    },
    {
      id: '07',
      title: 'INDEMNIFICATION',
      content: 'You agree to defend, indemnify, and hold harmless Samples.click and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of and access to the service.',
    },
    {
      id: '08',
      title: 'TERMINATION',
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including without limitation if you breach the Terms of Service. Upon termination, your right to use the service will immediately cease.',
    },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: TERMS OF SERVICE</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">TERMS OF</span>
            <span className="block text-[#ff3366]">SERVICE</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// LAST UPDATED</div>
          <p className="font-mono text-lg">February 13, 2026</p>
          <p className="font-mono text-sm text-[#888] mt-4">
            Please read these terms carefully before using our platform. These terms constitute a legally binding agreement between you and Samples.click regarding your use of our services.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-[#0a0a0a]">
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">AGREEMENT TYPE</div>
            <div className="font-display text-2xl">BINDING CONTRACT</div>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">GOVERNING LAW</div>
            <div className="font-display text-2xl">CALIFORNIA, USA</div>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">DISPUTE RESOLUTION</div>
            <div className="font-display text-2xl">BINDING ARBITRATION</div>
          </div>
          <div className="p-8 hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all group">
            <div className="font-mono text-xs text-[#999] group-hover:text-[#888] mb-2">UPDATE FREQUENCY</div>
            <div className="font-display text-2xl">AS NEEDED</div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          {terms.map((term, i) => (
            <div
              key={term.id}
              className={`py-12 ${i < terms.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                <div className="font-display text-4xl text-[#ff3366]">{term.id}</div>
                <div>
                  <h2 className="font-display text-2xl mb-4 uppercase">{term.title}</h2>
                  <p className="font-mono text-sm leading-relaxed text-[#666]">{term.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">LEGAL INQUIRIES</h2>
          <p className="font-mono text-lg mb-8">For legal questions or dispute resolution, contact our legal team.</p>
          <a href="mailto:legal@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            LEGAL@SAMPLES.CLICK →
          </a>
        </div>
      </section>
    </Layout>
  )
}
