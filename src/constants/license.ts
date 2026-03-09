export const licenseLastUpdated = 'February 13, 2026'

export const licenseTypes = [
  {
    name: 'RESEARCH LICENSE',
    code: 'RES-001',
    description:
      'For academic and non-commercial research purposes only. Datasets may be used in publications with proper attribution. Redistribution or commercial use is strictly prohibited.',
    permissions: ['Academic research', 'Publications with attribution', 'Single institution use'],
    restrictions: ['No commercial use', 'No redistribution', 'No derivative works for resale'],
  },
  {
    name: 'COMMERCIAL LICENSE',
    code: 'COM-002',
    description:
      'For commercial product development and internal business use. Includes broader usage rights for training machine learning models in commercial applications.',
    permissions: ['Commercial product development', 'ML model training', 'Internal business use'],
    restrictions: ['No dataset redistribution', 'No white-label resale', 'Per-seat limitations apply'],
  },
  {
    name: 'ENTERPRISE LICENSE',
    code: 'ENT-003',
    description:
      'Comprehensive license for large-scale deployments. Includes custom terms, unlimited seats, and dedicated support. Contact sales for enterprise pricing.',
    permissions: ['Unlimited internal use', 'Custom derivatives', 'Priority support', 'SLA guarantees'],
    restrictions: ['No competing dataset products', 'Audit rights reserved'],
  },
]

export const licenseConditions = [
  {
    id: '01',
    title: 'ATTRIBUTION REQUIREMENTS',
    content:
      'All dataset usage must include proper attribution to Samples.click as the data source. Attribution format: "Data provided by Samples.click (samples.click)". Academic publications must cite our dataset DOI when available.',
  },
  {
    id: '02',
    title: 'DATA INTEGRITY',
    content:
      'Datasets must be used as provided. Modification of metadata, labels, or source attribution is prohibited. Derivative works must clearly distinguish original data from modifications.',
  },
  {
    id: '03',
    title: 'PROHIBITED USES',
    content:
      'Datasets may not be used for surveillance, discrimination, or any purpose that violates applicable laws or human rights. We reserve the right to terminate licenses for users who violate these restrictions.',
  },
  {
    id: '04',
    title: 'AUDIT RIGHTS',
    content:
      'Samples.click reserves the right to audit your use of licensed datasets to ensure compliance. Enterprise licensees must maintain usage records for three years and provide them upon request.',
  },
  {
    id: '05',
    title: 'WARRANTY DISCLAIMER',
    content:
      'Datasets are provided "as is" without warranty of any kind, express or implied. We do not warrant accuracy, completeness, or fitness for any particular purpose. Use at your own risk.',
  },
]
