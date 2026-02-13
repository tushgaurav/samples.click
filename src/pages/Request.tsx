import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Request() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    datasetType: '',
    quantity: '',
    description: '',
    urgency: 'standard',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <Layout>
        <section className="px-6 py-32 min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="font-display text-6xl md:text-8xl mb-8 text-[#ff3366]">
              REQUEST<br />RECEIVED
            </div>
            <div className="font-mono text-xl mb-8">
              // CONFIRMATION_ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
            </div>
            <p className="font-mono text-lg text-[#666] mb-12">
              Our team will review your request and respond within 48 hours. Check your email for confirmation details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-display text-lg px-8 py-4 border-4 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all"
            >
              SUBMIT ANOTHER REQUEST
            </button>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl">
          <div className="font-mono text-xs mb-6">// PAGE: REQUEST</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">CUSTOM</span>
            <span className="block text-[#ff3366]">DATASET</span>
          </h1>
          <p className="font-mono text-lg max-w-xl mt-8 text-[#666]">
            Can't find what you need? Describe your requirements and we'll deploy hardware to collect it.
          </p>
        </div>
      </section>

      <section className={`px-6 py-16 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { num: '01', title: 'SUBMIT', desc: 'Describe your dataset needs' },
            { num: '02', title: 'REVIEW', desc: 'We assess feasibility & quote' },
            { num: '03', title: 'DEPLOY', desc: 'Hardware goes to the field' },
            { num: '04', title: 'DELIVER', desc: 'Data arrives in your inbox' },
          ].map((step, i) => (
            <div key={step.num} className={`p-6 ${i < 3 ? 'border-r-2 border-[#333]' : ''}`}>
              <div className="font-display text-4xl text-[#ff3366] mb-2">{step.num}</div>
              <h3 className="font-display text-lg mb-1">{step.title}</h3>
              <p className="font-mono text-xs text-[#888]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`px-6 py-20 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <div className="font-mono text-xs mb-8 text-[#ff3366]">// NEW REQUEST FORM</div>
          
          <form onSubmit={handleSubmit} className="border-4 border-[#0a0a0a]">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-[#0a0a0a]">
              <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a]">
                <label className="block font-mono text-xs mb-2 text-[#666]">// CONTACT_NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="p-6">
                <label className="block font-mono text-xs mb-2 text-[#666]">// CONTACT_EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-[#0a0a0a]">
              <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a]">
                <label className="block font-mono text-xs mb-2 text-[#666]">// COMPANY</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div className="p-6">
                <label className="block font-mono text-xs mb-2 text-[#666]">// INDUSTRY</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors cursor-pointer"
                >
                  <option value="">Select industry</option>
                  <option value="robotics">ROBOTICS</option>
                  <option value="healthcare">HEALTHCARE</option>
                  <option value="manufacturing">MANUFACTURING</option>
                  <option value="agriculture">AGRICULTURE</option>
                  <option value="logistics">LOGISTICS</option>
                  <option value="automotive">AUTOMOTIVE</option>
                  <option value="retail">RETAIL</option>
                  <option value="other">OTHER</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-[#0a0a0a]">
              <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a]">
                <label className="block font-mono text-xs mb-2 text-[#666]">// DATASET_TYPE</label>
                <input
                  type="text"
                  name="datasetType"
                  value={formData.datasetType}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="e.g., MEDICAL_HANDWRITING"
                />
              </div>
              <div className="p-6">
                <label className="block font-mono text-xs mb-2 text-[#666]">// SAMPLE_QUANTITY</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="e.g., 10,000"
                />
              </div>
            </div>

            <div className="border-b-2 border-[#0a0a0a] p-6">
              <label className="block font-mono text-xs mb-2 text-[#666]">// URGENCY_LEVEL</label>
              <div className="flex gap-4 flex-wrap">
                {['standard', 'expedited', 'rush'].map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="urgency"
                      value={level}
                      checked={formData.urgency === level}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className={`font-mono text-sm px-4 py-2 border-2 border-[#0a0a0a] transition-all ${
                      formData.urgency === level 
                        ? 'bg-[#0a0a0a] text-[#fffef8]' 
                        : 'hover:bg-[#0a0a0a] hover:text-[#fffef8]'
                    }`}>
                      {level.toUpperCase()}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6">
              <label className="block font-mono text-xs mb-2 text-[#666]">// DESCRIPTION</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full font-mono text-lg bg-transparent border-2 border-[#0a0a0a] p-4 focus:border-[#ff3366] outline-none transition-colors resize-none"
                placeholder="Describe your dataset requirements in detail. Include data format, labeling requirements, collection environment, etc."
              />
            </div>

            <div className="p-6 bg-[#0a0a0a]">
              <button
                type="submit"
                className="w-full font-display text-2xl py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#fffef8] hover:text-[#0a0a0a] transition-colors"
              >
                SUBMIT REQUEST →
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className={`px-6 py-16 border-t-4 border-[#0a0a0a] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-[#0a0a0a] p-6">
            <div className="font-mono text-xs text-[#ff3366] mb-2">// MINIMUM ORDER</div>
            <div className="font-display text-3xl">500</div>
            <div className="font-mono text-sm text-[#666]">samples per request</div>
          </div>
          <div className="border-2 border-[#0a0a0a] p-6">
            <div className="font-mono text-xs text-[#ff3366] mb-2">// STANDARD TURNAROUND</div>
            <div className="font-display text-3xl">2-4</div>
            <div className="font-mono text-sm text-[#666]">weeks for delivery</div>
          </div>
          <div className="border-2 border-[#0a0a0a] p-6">
            <div className="font-mono text-xs text-[#ff3366] mb-2">// STARTING AT</div>
            <div className="font-display text-3xl">$1,500</div>
            <div className="font-mono text-sm text-[#666]">per custom dataset</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
