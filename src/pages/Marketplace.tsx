import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import {
  type MarketplaceDataset,
  marketplaceDatasets,
  categories,
  sortOptions,
} from '../constants/marketplace'

type View = 'browse' | 'detail' | 'cart' | 'checkout' | 'confirmation'

export default function Marketplace() {
  const [mounted, setMounted] = useState(false)
  const [view, setView] = useState<View>('browse')

  // Browse state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name-asc')

  // Detail state
  const [selectedDataset, setSelectedDataset] = useState<MarketplaceDataset | null>(null)

  // Cart state
  const [cart, setCart] = useState<MarketplaceDataset[]>([])

  // Checkout state
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '', company: '' })
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredDatasets = useMemo(() => {
    let result = [...marketplaceDatasets]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter((d) => d.category === selectedCategory)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'samples-desc':
        result.sort((a, b) => b.sampleCount - a.sampleCount)
        break
      case 'samples-asc':
        result.sort((a, b) => a.sampleCount - b.sampleCount)
        break
      default:
        result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const cartTotal = cart.reduce((sum, d) => sum + d.price, 0)

  function addToCart(dataset: MarketplaceDataset) {
    if (!cart.find((d) => d.id === dataset.id)) {
      setCart([...cart, dataset])
    }
  }

  function removeFromCart(id: string) {
    setCart(cart.filter((d) => d.id !== id))
  }

  function openDetail(dataset: MarketplaceDataset) {
    setSelectedDataset(dataset)
    setView('detail')
    window.scrollTo(0, 0)
  }

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault()
    setOrderId(Math.random().toString(36).substring(2, 10).toUpperCase())
    setView('confirmation')
    window.scrollTo(0, 0)
  }

  function resetToMarketplace() {
    setView('browse')
    setCart([])
    setCheckoutForm({ name: '', email: '', company: '' })
    setOrderId('')
    window.scrollTo(0, 0)
  }

  // ── BROWSE VIEW ──────────────────────────────────────────────

  if (view === 'browse') {
    return (
      <Layout>
        <section
          className={`px-6 py-20 border-b-4 border-[#0a0a0a] transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs mb-6">// PAGE: MARKETPLACE</div>
              <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
                <span className="block">DATASET</span>
                <span className="block text-[#ff3366]">STORE</span>
              </h1>
            </div>
            <button
              onClick={() => {
                setView('cart')
                window.scrollTo(0, 0)
              }}
              className="font-mono text-sm px-6 py-3 border-4 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all self-start md:self-auto"
            >
              CART [{cart.length}]{cart.length > 0 && ` — $${cartTotal.toLocaleString()}`}
            </button>
          </div>
        </section>

        <section
          className={`px-6 py-8 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="SEARCH DATASETS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-mono text-sm bg-transparent border-b-2 border-[#333] pb-2 focus:border-[#ff3366] outline-none transition-colors placeholder-[#666]"
            />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-mono text-xs px-3 py-1 border-2 transition-all ${
                      selectedCategory === cat
                        ? 'border-[#ff3366] bg-[#ff3366] text-[#fffef8]'
                        : 'border-[#333] text-[#888] hover:border-[#fffef8] hover:text-[#fffef8]'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-mono text-xs bg-transparent border-2 border-[#333] px-3 py-1 text-[#888] focus:border-[#ff3366] outline-none transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0a0a0a]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section
          className={`px-6 py-12 border-b-4 border-[#0a0a0a] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="font-mono text-xs text-[#ff3366]">// DATASETS</div>
            <div className="font-mono text-xs text-[#999]">
              {filteredDatasets.length} RESULT{filteredDatasets.length !== 1 ? 'S' : ''}
            </div>
          </div>

          {filteredDatasets.length === 0 ? (
            <div className="border-4 border-[#0a0a0a] p-12 text-center">
              <div className="font-display text-2xl mb-2">NO DATASETS FOUND</div>
              <div className="font-mono text-sm text-[#666]">Try adjusting your search or filters.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-4 border-[#0a0a0a]">
              {filteredDatasets.map((ds, i) => {
                const inCart = cart.some((c) => c.id === ds.id)
                return (
                  <div
                    key={ds.id}
                    className={`p-6 group transition-all ${
                      i < filteredDatasets.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''
                    } ${(i + 1) % 3 !== 0 && i < filteredDatasets.length - 1 ? 'lg:border-r-2' : ''} ${
                      (i + 1) % 2 !== 0 ? 'md:border-r-2 lg:border-r-0' : ''
                    } ${(i + 1) % 3 !== 0 ? 'lg:border-r-2' : ''}`}
                  >
                    <div className="font-mono text-xs text-[#ff3366] mb-2">
                      // {ds.category.toUpperCase()}
                    </div>
                    <div
                      className="font-display text-lg mb-2 cursor-pointer hover:text-[#ff3366] transition-colors"
                      onClick={() => openDetail(ds)}
                    >
                      {ds.name.replace(/_/g, ' ')}
                    </div>
                    <div className="font-mono text-xs text-[#666] mb-4 leading-relaxed line-clamp-2">
                      {ds.description}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {ds.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 border border-[#0a0a0a] text-[#666]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <div className="font-mono text-xs text-[#999]">
                          {ds.sampleCount.toLocaleString()} samples
                        </div>
                        <div className="font-display text-2xl">${ds.price.toLocaleString()}</div>
                      </div>
                      <div className="font-mono text-xs text-[#999]">{ds.format}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openDetail(ds)}
                        className="flex-1 font-mono text-xs py-2 border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all"
                      >
                        DETAILS
                      </button>
                      <button
                        onClick={() => addToCart(ds)}
                        disabled={inCart}
                        className={`flex-1 font-mono text-xs py-2 transition-all ${
                          inCart
                            ? 'bg-[#0a0a0a] text-[#fffef8] cursor-default'
                            : 'bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a]'
                        }`}
                      >
                        {inCart ? 'IN CART' : 'ADD TO CART'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 border-b-4 border-[#0a0a0a]">
          {[
            { v: '10', l: 'DATASETS' },
            { v: '75K+', l: 'TOTAL SAMPLES' },
            { v: '8', l: 'INDUSTRIES' },
            { v: '<48H', l: 'DELIVERY' },
          ].map((stat, i) => (
            <div
              key={stat.l}
              className={`p-4 md:p-8 text-center ${i < 3 ? 'border-r-2 md:border-r-4 border-[#0a0a0a]' : ''}`}
            >
              <div className="font-display text-2xl md:text-4xl">{stat.v}</div>
              <div className="font-mono text-xs text-[#666] mt-1">{stat.l}</div>
            </div>
          ))}
        </section>
      </Layout>
    )
  }

  // ── DETAIL VIEW ──────────────────────────────────────────────

  if (view === 'detail' && selectedDataset) {
    const ds = selectedDataset
    const inCart = cart.some((c) => c.id === ds.id)

    return (
      <Layout>
        <section className="px-6 py-20 border-b-4 border-[#0a0a0a]">
          <button
            onClick={() => {
              setView('browse')
              window.scrollTo(0, 0)
            }}
            className="font-mono text-sm mb-8 hover:text-[#ff3366] transition-colors inline-block"
          >
            ← BACK TO MARKETPLACE
          </button>
          <div className="font-mono text-xs text-[#ff3366] mb-4">
            // {ds.category.toUpperCase()} / {ds.id.toUpperCase()}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[8vw] leading-[0.9] tracking-tight uppercase">
            {ds.name.replace(/_/g, ' ')}
          </h1>
        </section>

        <section className="px-6 py-12 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { label: 'SAMPLES', value: ds.sampleCount.toLocaleString() },
              { label: 'PRICE', value: `$${ds.price.toLocaleString()}` },
              { label: 'FORMAT', value: ds.format },
              { label: 'ACCURACY', value: ds.accuracy },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`p-6 ${i < 3 ? 'border-r-2 border-[#333]' : ''}`}
              >
                <div className="font-mono text-xs text-[#888] mb-2">{item.label}</div>
                <div className="font-display text-xl md:text-2xl">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 border-b-4 border-[#0a0a0a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="font-mono text-xs text-[#ff3366] mb-4">// DESCRIPTION</div>
              <p className="font-mono text-sm text-[#666] leading-relaxed mb-8">{ds.description}</p>

              <div className="font-mono text-xs text-[#ff3366] mb-4">// COLLECTION METHOD</div>
              <p className="font-mono text-sm text-[#666] leading-relaxed mb-8">
                {ds.collectionMethod}
              </p>

              <div className="font-mono text-xs text-[#999]">ADDED: {ds.dateAdded}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-[#ff3366] mb-4">// WHAT&apos;S INCLUDED</div>
              <ul className="font-mono text-sm text-[#666] space-y-2 mb-8">
                {ds.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#ff3366]">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="font-mono text-xs text-[#ff3366] mb-4">// USE CASES</div>
              <ul className="font-mono text-sm text-[#666] space-y-2 mb-8">
                {ds.useCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-2">
                    <span className="text-[#ff3366]">▸</span>
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {ds.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 border-2 border-[#0a0a0a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 border-b-4 border-[#0a0a0a]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-display text-3xl md:text-4xl">
                ${ds.price.toLocaleString()}
              </div>
              <div className="font-mono text-sm text-[#666] mt-1">
                {ds.sampleCount.toLocaleString()} samples · {ds.format}
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(ds)
                if (!inCart) {
                  setView('cart')
                  window.scrollTo(0, 0)
                }
              }}
              disabled={inCart}
              className={`font-display text-lg px-12 py-6 transition-colors ${
                inCart
                  ? 'bg-[#0a0a0a] text-[#fffef8] cursor-default'
                  : 'bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a]'
              }`}
            >
              {inCart ? 'ALREADY IN CART' : 'ADD TO CART →'}
            </button>
          </div>
        </section>
      </Layout>
    )
  }

  // ── CART VIEW ────────────────────────────────────────────────

  if (view === 'cart') {
    return (
      <Layout>
        <section className="px-6 py-20 border-b-4 border-[#0a0a0a]">
          <button
            onClick={() => {
              setView('browse')
              window.scrollTo(0, 0)
            }}
            className="font-mono text-sm mb-8 hover:text-[#ff3366] transition-colors inline-block"
          >
            ← BACK TO MARKETPLACE
          </button>
          <div className="font-mono text-xs mb-6">// YOUR CART</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">YOUR</span>
            <span className="block text-[#ff3366]">CART</span>
          </h1>
        </section>

        {cart.length === 0 ? (
          <section className="px-6 py-20 border-b-4 border-[#0a0a0a]">
            <div className="text-center py-12">
              <div className="font-display text-3xl mb-4">CART IS EMPTY</div>
              <div className="font-mono text-sm text-[#666] mb-8">
                Browse our datasets and add some to your cart.
              </div>
              <button
                onClick={() => {
                  setView('browse')
                  window.scrollTo(0, 0)
                }}
                className="font-display text-lg px-12 py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors"
              >
                BROWSE DATASETS →
              </button>
            </div>
          </section>
        ) : (
          <>
            <section className="px-6 py-8 border-b-4 border-[#0a0a0a]">
              <div className="hidden md:block border-4 border-[#0a0a0a]">
                <div className="grid grid-cols-12 gap-0 font-mono text-xs bg-[#0a0a0a] text-[#fffef8]">
                  <div className="col-span-1 p-3 border-r border-[#333]">#</div>
                  <div className="col-span-4 p-3 border-r border-[#333]">DATASET</div>
                  <div className="col-span-2 p-3 border-r border-[#333]">SAMPLES</div>
                  <div className="col-span-2 p-3 border-r border-[#333]">FORMAT</div>
                  <div className="col-span-2 p-3 border-r border-[#333]">PRICE</div>
                  <div className="col-span-1 p-3"></div>
                </div>
                {cart.map((ds, i) => (
                  <div
                    key={ds.id}
                    className="grid grid-cols-12 gap-0 font-mono text-sm border-t-2 border-[#0a0a0a] group"
                  >
                    <div className="col-span-1 p-3 border-r-2 border-[#0a0a0a]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-4 p-3 border-r-2 border-[#0a0a0a]">
                      {ds.name}
                    </div>
                    <div className="col-span-2 p-3 border-r-2 border-[#0a0a0a]">
                      {ds.sampleCount.toLocaleString()}
                    </div>
                    <div className="col-span-2 p-3 border-r-2 border-[#0a0a0a]">
                      {ds.format}
                    </div>
                    <div className="col-span-2 p-3 border-r-2 border-[#0a0a0a] font-bold">
                      ${ds.price.toLocaleString()}
                    </div>
                    <div className="col-span-1 p-3 flex items-center justify-center">
                      <button
                        onClick={() => removeFromCart(ds.id)}
                        className="text-[#999] hover:text-[#ff3366] transition-colors font-mono text-lg"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden border-4 border-[#0a0a0a]">
                {cart.map((ds) => (
                  <div key={ds.id} className="p-4 border-b-2 border-[#0a0a0a] last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-display text-sm">{ds.name.replace(/_/g, ' ')}</div>
                      <button
                        onClick={() => removeFromCart(ds.id)}
                        className="text-[#999] hover:text-[#ff3366] transition-colors font-mono text-lg ml-4"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="font-mono text-xs text-[#666]">
                        {ds.sampleCount.toLocaleString()} samples
                      </div>
                      <div className="font-display text-lg">${ds.price.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="px-6 py-12 border-b-4 border-[#0a0a0a]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="font-mono text-xs text-[#999] mb-1">
                    {cart.length} ITEM{cart.length !== 1 ? 'S' : ''}
                  </div>
                  <div className="font-display text-3xl md:text-4xl">
                    TOTAL: ${cartTotal.toLocaleString()}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setView('browse')
                      window.scrollTo(0, 0)
                    }}
                    className="font-mono text-sm px-6 py-3 border-4 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fffef8] transition-all"
                  >
                    CONTINUE BROWSING
                  </button>
                  <button
                    onClick={() => {
                      setView('checkout')
                      window.scrollTo(0, 0)
                    }}
                    className="font-display text-lg px-8 py-3 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors"
                  >
                    CHECKOUT →
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </Layout>
    )
  }

  // ── CHECKOUT VIEW ────────────────────────────────────────────

  if (view === 'checkout') {
    return (
      <Layout>
        <section className="px-6 py-20 border-b-4 border-[#0a0a0a]">
          <button
            onClick={() => {
              setView('cart')
              window.scrollTo(0, 0)
            }}
            className="font-mono text-sm mb-8 hover:text-[#ff3366] transition-colors inline-block"
          >
            ← BACK TO CART
          </button>
          <div className="font-mono text-xs mb-6">// CHECKOUT</div>
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase">
            <span className="block">CHECK</span>
            <span className="block text-[#ff3366]">OUT</span>
          </h1>
        </section>

        <section className="px-6 py-8 border-b-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#fffef8]">
          <div className="font-mono text-xs text-[#ff3366] mb-4">// ORDER SUMMARY</div>
          <div className="space-y-3">
            {cart.map((ds) => (
              <div key={ds.id} className="flex justify-between font-mono text-sm">
                <span className="text-[#888]">{ds.name}</span>
                <span>${ds.price.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-[#333] pt-3 flex justify-between font-display text-xl">
              <span>TOTAL</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 border-b-4 border-[#0a0a0a]">
          <form onSubmit={handleCheckout}>
            <div className="border-4 border-[#0a0a0a]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#0a0a0a]">
                  <label className="font-mono text-xs text-[#ff3366] block mb-2">
                    // CONTACT_NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.name}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, name: e.target.value })
                    }
                    className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="p-6">
                  <label className="font-mono text-xs text-[#ff3366] block mb-2">
                    // CONTACT_EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={checkoutForm.email}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, email: e.target.value })
                    }
                    className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="p-6 border-t-2 border-[#0a0a0a]">
                <label className="font-mono text-xs text-[#ff3366] block mb-2">
                  // COMPANY
                </label>
                <input
                  type="text"
                  required
                  value={checkoutForm.company}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, company: e.target.value })
                  }
                  className="w-full font-mono text-lg bg-transparent border-b-2 border-[#0a0a0a] pb-2 focus:border-[#ff3366] outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 font-display text-xl py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors"
            >
              PLACE ORDER →
            </button>
          </form>
        </section>
      </Layout>
    )
  }

  // ── CONFIRMATION VIEW ────────────────────────────────────────

  if (view === 'confirmation') {
    return (
      <Layout>
        <section className="px-6 py-20 min-h-[60vh] flex flex-col justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-mono text-xs text-[#ff3366] mb-6">// ORDER_ID: {orderId}</div>
            <h1 className="font-display text-[10vw] leading-[0.9] tracking-tight uppercase mb-8">
              <span className="block">ORDER</span>
              <span className="block text-[#ff3366]">CONFIRMED</span>
            </h1>
            <div className="border-4 border-[#0a0a0a] text-left mb-8">
              {cart.map((ds, i) => (
                <div
                  key={ds.id}
                  className={`flex justify-between p-4 font-mono text-sm ${
                    i < cart.length - 1 ? 'border-b-2 border-[#0a0a0a]' : ''
                  }`}
                >
                  <span>{ds.name}</span>
                  <span>${ds.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between p-4 font-display text-xl bg-[#0a0a0a] text-[#fffef8]">
                <span>TOTAL</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </div>
            <p className="font-mono text-sm text-[#666] mb-8">
              Our team will send download links to{' '}
              <span className="text-[#0a0a0a]">{checkoutForm.email}</span> within 48 hours.
            </p>
            <button
              onClick={resetToMarketplace}
              className="font-display text-lg px-12 py-6 bg-[#ff3366] text-[#fffef8] hover:bg-[#0a0a0a] transition-colors"
            >
              BROWSE MORE DATASETS →
            </button>
          </div>
        </section>
      </Layout>
    )
  }

  return null
}
