import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function License() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const licenseTypes = [
    {
      name: 'RESEARCH LICENSE',
      code: 'RES-001',
      description: 'For academic and non-commercial research purposes only. Datasets may be used in publications with proper attribution. Redistribution or commercial use is strictly prohibited.',
      permissions: ['Academic research', 'Publications with attribution', 'Single institution use'],
      restrictions: ['No commercial use', 'No redistribution', 'No derivative works for resale'],
    },
    {
      name: 'COMMERCIAL LICENSE',
      code: 'COM-002',
      description: 'For commercial product development and internal business use. Includes broader usage rights for training machine learning models in commercial applications.',
      permissions: ['Commercial product development', 'ML model training', 'Internal business use'],
      restrictions: ['No dataset redistribution', 'No white-label resale', 'Per-seat limitations apply'],
    },
    {
      name: 'ENTERPRISE LICENSE',
      code: 'ENT-003',
      description: 'Comprehensive license for large-scale deployments. Includes custom terms, unlimited seats, and dedicated support. Contact sales for enterprise pricing.',
      permissions: ['Unlimited internal use', 'Custom derivatives', 'Priority support', 'SLA guarantees'],
      restrictions: ['No competing dataset products', 'Audit rights reserved'],
    },
  ]

  const conditions = [
    {
      id: '01',
      title: 'ATTRIBUTION REQUIREMENTS',
      content: 'All dataset usage must include proper attribution to Samples.click as the data source. Attribution format: "Data provided by Samples.click (samples.click)". Academic publications must cite our dataset DOI when available.',
    },
    {
      id: '02',
      title: 'DATA INTEGRITY',
      content: 'Datasets must be used as provided. Modification of metadata, labels, or source attribution is prohibited. Derivative works must clearly distinguish original data from modifications.',
    },
    {
      id: '03',
      title: 'PROHIBITED USES',
      content: 'Datasets may not be used for surveillance, discrimination, or any purpose that violates applicable laws or human rights. We reserve the right to terminate licenses for users who violate these restrictions.',
    },
    {
      id: '04',
      title: 'AUDIT RIGHTS',
      content: 'Samples.click reserves the right to audit your use of licensed datasets to ensure compliance. Enterprise licensees must maintain usage records for three years and provide them upon request.',
    },
    {
      id: '05',
      title: 'WARRANTY DISCLAIMER',
      content: 'Datasets are provided "as is" without warranty of any kind, express or implied. We do not warrant accuracy, completeness, or fitness for any particular purpose. Use at your own risk.',
    },
  ]

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: DATA LICENSE</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">DATA</span>
            <span className="block text-[#ff3366]">LICENSE</span>
          </h1>
        </div>
      </section>

      <section className={`px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-4 text-[#ff3366]">// LAST UPDATED</div>
          <p className="font-mono text-lg">February 13, 2026</p>
          <p className="font-mono text-sm text-[#888] mt-4">
            Each dataset on Samples.click is licensed under specific terms. This document outlines our standard license types and general conditions that apply to all dataset usage.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// LICENSE TYPES</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-4 border-[#0a0a0a]">
          {licenseTypes.map((license, i) => (
            <div
              key={license.code}
              className={`p-8 ${i < licenseTypes.length - 1 ? 'border-b-4 lg:border-b-0 lg:border-r-4 border-[#0a0a0a]' : ''}`}
            >
              <div className="font-mono text-xs text-[#999] mb-2">CODE: {license.code}</div>
              <div className="font-display text-2xl mb-4">{license.name}</div>
              <p className="font-mono text-sm text-[#666] mb-6 leading-relaxed">{license.description}</p>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-xs text-[#ff3366] mb-2">PERMITTED</div>
                  <div className="space-y-1">
                    {license.permissions.map((p) => (
                      <div key={p} className="font-mono text-xs flex items-center gap-2">
                        <span className="text-[#00ff00]">✓</span> {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#ff3366] mb-2">RESTRICTED</div>
                  <div className="space-y-1">
                    {license.restrictions.map((r) => (
                      <div key={r} className="font-mono text-xs flex items-center gap-2">
                        <span className="text-[#ff3366]">✗</span> {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] bg-[#fffef8] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// STANDARD CONDITIONS</div>
        <div className="max-w-4xl">
          {conditions.map((condition, i) => (
            <div
              key={condition.id}
              className={`py-10 ${i < conditions.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                <div className="font-display text-4xl text-[#ff3366]">{condition.id}</div>
                <div>
                  <h2 className="font-display text-2xl mb-4 uppercase">{condition.title}</h2>
                  <p className="font-mono text-sm leading-relaxed text-[#666]">{condition.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-mono text-xs mb-8 text-[#ff3366]">// LICENSE COMPARISON</div>
        <div className="overflow-x-auto">
          <table className="w-full border-4 border-[#0a0a0a] font-mono text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] text-[#fffef8]">
                <th className="p-4 text-left border-r-2 border-[#333]">FEATURE</th>
                <th className="p-4 text-center border-r-2 border-[#333]">RESEARCH</th>
                <th className="p-4 text-center border-r-2 border-[#333]">COMMERCIAL</th>
                <th className="p-4 text-center">ENTERPRISE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-[#0a0a0a]">
                <td className="p-4 border-r-2 border-[#0a0a0a]">Commercial Use</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#00ff00]">✓</td>
                <td className="p-4 text-center text-[#00ff00]">✓</td>
              </tr>
              <tr className="border-b-2 border-[#0a0a0a]">
                <td className="p-4 border-r-2 border-[#0a0a0a]">Model Training</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#00ff00]">✓</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#00ff00]">✓</td>
                <td className="p-4 text-center text-[#00ff00]">✓</td>
              </tr>
              <tr className="border-b-2 border-[#0a0a0a]">
                <td className="p-4 border-r-2 border-[#0a0a0a]">Unlimited Seats</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center text-[#00ff00]">✓</td>
              </tr>
              <tr className="border-b-2 border-[#0a0a0a]">
                <td className="p-4 border-r-2 border-[#0a0a0a]">Priority Support</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center text-[#00ff00]">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-r-2 border-[#0a0a0a]">Custom Derivatives</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center border-r-2 border-[#0a0a0a] text-[#ff3366]">✗</td>
                <td className="p-4 text-center text-[#00ff00]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={`px-6 py-20 bg-[#ff3366] text-[#fffef8] transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">NEED A CUSTOM LICENSE?</h2>
          <p className="font-mono text-lg mb-8">Contact our licensing team for enterprise agreements and custom terms.</p>
          <a href="mailto:license@samples.click" className="inline-block font-display text-xl px-12 py-6 bg-[#0a0a0a] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors">
            LICENSE@SAMPLES.CLICK →
          </a>
        </div>
      </section>
    </Layout>
  )
}
