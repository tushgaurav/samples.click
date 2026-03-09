export const problems = [
  {
    title: 'SYNTHETIC DATA IS LIMITED',
    desc: 'Simulated environments can never fully capture the chaos and edge cases of the real world. Your models fail when they encounter reality.',
  },
  {
    title: 'CROWDSOURCING IS INCONSISTENT',
    desc: 'Generic labeling platforms produce low-quality annotations from workers with no domain expertise. You spend months cleaning data.',
  },
  {
    title: 'IN-HOUSE COLLECTION IS EXPENSIVE',
    desc: 'Deploying hardware, hiring operators, and managing logistics costs millions. You burn runway on infrastructure instead of innovation.',
  },
]

export const solutions = [
  {
    title: 'AUTHENTIC DATA',
    desc: 'We deploy sensors and cameras in real factories, warehouses, hospitals, and fields. Every sample comes from actual operations.',
    stat: '100%',
    statLabel: 'REAL-WORLD DATA',
  },
  {
    title: 'EXPERT ANNOTATION',
    desc: 'Our labeling team includes domain specialists—roboticists, medical professionals, agricultural scientists—who understand your use case.',
    stat: '99.7%',
    statLabel: 'LABEL ACCURACY',
  },
  {
    title: 'TURNKEY OPERATION',
    desc: 'We handle hardware deployment, data collection, quality assurance, and delivery. You focus on training models.',
    stat: '<48H',
    statLabel: 'DELIVERY TIME',
  },
]

export const comparison = [
  { feature: 'Data Quality', us: '★★★★★', synthetic: '★★☆☆☆', crowdsourced: '★★★☆☆' },
  { feature: 'Edge Cases', us: '★★★★★', synthetic: '★★☆☆☆', crowdsourced: '★★★★☆' },
  { feature: 'Cost Efficiency', us: '★★★★☆', synthetic: '★★★★★', crowdsourced: '★★★☆☆' },
  { feature: 'Time to Deploy', us: '★★★★★', synthetic: '★★★★★', crowdsourced: '★★★☆☆' },
  { feature: 'Domain Expertise', us: '★★★★★', synthetic: '★☆☆☆☆', crowdsourced: '★★☆☆☆' },
]

export const industries = [
  'ROBOTICS',
  'HEALTHCARE',
  'MANUFACTURING',
  'AGRICULTURE',
  'LOGISTICS',
  'AUTOMOTIVE',
  'RETAIL',
  'CONSTRUCTION',
]
