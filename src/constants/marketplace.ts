export interface MarketplaceDataset {
  id: string
  name: string
  description: string
  category: string
  sampleCount: number
  price: number
  format: string
  tags: string[]
  useCases: string[]
  includes: string[]
  collectionMethod: string
  accuracy: string
  dateAdded: string
}

export const marketplaceDatasets: MarketplaceDataset[] = [
  {
    id: 'medical-handwriting',
    name: 'MEDICAL_HANDWRITING',
    description:
      'Handwritten prescriptions and clinical notes captured from hospital environments. Each sample includes the raw image, bounding boxes, and full text transcription.',
    category: 'healthcare',
    sampleCount: 1000,
    price: 499,
    format: 'PNG + JSON',
    tags: ['OCR', 'HANDWRITING', 'MEDICAL'],
    useCases: ['Prescription digitization', 'Medical record automation', 'Pharmacist decision support'],
    includes: ['Annotated images', 'Bounding boxes', 'Transcription labels', 'Writer metadata'],
    collectionMethod: 'Hospital-deployed high-res scanners',
    accuracy: '99.2%',
    dateAdded: '2026-01',
  },
  {
    id: 'industrial-assembly',
    name: 'INDUSTRIAL_ASSEMBLY',
    description:
      'Multi-angle video frames of assembly line operations across automotive and electronics factories. Annotated with part positions, worker poses, and task stage labels.',
    category: 'manufacturing',
    sampleCount: 10000,
    price: 2999,
    format: 'MP4 + COCO JSON',
    tags: ['ASSEMBLY', 'POSE', 'FACTORY'],
    useCases: ['Assembly verification', 'Worker safety monitoring', 'Process optimization'],
    includes: ['Video frames', 'COCO annotations', 'Task stage labels', 'Part segmentation masks'],
    collectionMethod: 'Overhead and side-mounted cameras in partner factories',
    accuracy: '99.5%',
    dateAdded: '2026-01',
  },
  {
    id: 'robotic-manipulation',
    name: 'ROBOTIC_MANIPULATION',
    description:
      'Point clouds and RGB-D frames of robotic arms grasping, placing, and sorting objects in structured environments. Includes joint states and grasp success labels.',
    category: 'robotics',
    sampleCount: 5500,
    price: 1899,
    format: 'PCD + YAML',
    tags: ['GRASPING', 'POINT CLOUD', 'RGB-D'],
    useCases: ['Grasp planning', 'Sim-to-real transfer', 'Manipulation policy training'],
    includes: ['Point clouds', 'RGB-D frames', 'Joint state logs', 'Grasp success/failure labels'],
    collectionMethod: 'Cobot cells with depth cameras and force-torque sensors',
    accuracy: '99.7%',
    dateAdded: '2026-02',
  },
  {
    id: 'agricultural-sorting',
    name: 'AGRICULTURAL_SORTING',
    description:
      'High-resolution images of produce on conveyor belts with quality grades, defect annotations, and size classifications. Covers fruits, vegetables, and grains.',
    category: 'agriculture',
    sampleCount: 8200,
    price: 2299,
    format: 'JPEG + CSV',
    tags: ['SORTING', 'DEFECT', 'PRODUCE'],
    useCases: ['Automated grading', 'Defect detection', 'Yield estimation'],
    includes: ['Labeled images', 'Quality grade scores', 'Defect bounding boxes', 'Size measurements'],
    collectionMethod: 'Inline cameras on sorting lines at partner farms',
    accuracy: '98.9%',
    dateAdded: '2026-01',
  },
  {
    id: 'warehouse-navigation',
    name: 'WAREHOUSE_NAVIGATION',
    description:
      'LiDAR scans and stereo camera feeds from autonomous mobile robots navigating warehouse aisles. Includes occupancy grids, path trajectories, and obstacle labels.',
    category: 'logistics',
    sampleCount: 12000,
    price: 3499,
    format: 'ROS BAG + PNG',
    tags: ['LIDAR', 'NAVIGATION', 'AMR'],
    useCases: ['Path planning', 'Obstacle avoidance', 'Fleet coordination'],
    includes: ['LiDAR point clouds', 'Stereo images', 'Occupancy grids', 'Trajectory logs'],
    collectionMethod: 'AMR-mounted sensors in live warehouse operations',
    accuracy: '99.8%',
    dateAdded: '2026-02',
  },
  {
    id: 'automotive-defect',
    name: 'AUTOMOTIVE_DEFECT_DETECTION',
    description:
      'Surface inspection images of painted automotive body panels captured under controlled lighting. Annotated with defect type, severity, and pixel-level masks.',
    category: 'automotive',
    sampleCount: 6500,
    price: 2199,
    format: 'TIFF + JSON',
    tags: ['SURFACE', 'DEFECT', 'PAINT'],
    useCases: ['Paint quality inspection', 'Automated defect classification', 'Production line QA'],
    includes: ['High-res surface images', 'Defect segmentation masks', 'Severity scores', 'Defect taxonomy'],
    collectionMethod: 'Multi-spectral cameras in paint booth inspection zones',
    accuracy: '99.4%',
    dateAdded: '2026-03',
  },
  {
    id: 'retail-shelf',
    name: 'RETAIL_SHELF_MONITORING',
    description:
      'Shelf-facing images from retail stores with planogram compliance labels, stock level estimates, and product identification bounding boxes.',
    category: 'retail',
    sampleCount: 9000,
    price: 2699,
    format: 'JPEG + JSON',
    tags: ['SHELF', 'RETAIL', 'INVENTORY'],
    useCases: ['Planogram compliance', 'Out-of-stock detection', 'Inventory analytics'],
    includes: ['Shelf images', 'Product bounding boxes', 'SKU labels', 'Stock level annotations'],
    collectionMethod: 'Fixed and mobile cameras in partner retail locations',
    accuracy: '98.7%',
    dateAdded: '2026-02',
  },
  {
    id: 'construction-safety',
    name: 'CONSTRUCTION_SAFETY_GEAR',
    description:
      'On-site construction footage annotated for PPE compliance: hard hats, vests, gloves, harnesses. Covers multiple weather and lighting conditions.',
    category: 'construction',
    sampleCount: 4200,
    price: 1599,
    format: 'MP4 + PASCAL VOC',
    tags: ['PPE', 'SAFETY', 'DETECTION'],
    useCases: ['PPE compliance monitoring', 'Safety violation alerts', 'Site access control'],
    includes: ['Video frames', 'PPE bounding boxes', 'Compliance labels', 'Worker anonymization masks'],
    collectionMethod: 'Site-mounted weatherproof cameras at construction partners',
    accuracy: '99.1%',
    dateAdded: '2026-03',
  },
  {
    id: 'surgical-instruments',
    name: 'SURGICAL_INSTRUMENT_TRACKING',
    description:
      'Overhead surgical tray images with instrument identification, count verification, and spatial layout annotations. Collected pre- and post-procedure.',
    category: 'healthcare',
    sampleCount: 3800,
    price: 1799,
    format: 'PNG + COCO JSON',
    tags: ['SURGICAL', 'TRACKING', 'INSTRUMENT'],
    useCases: ['Instrument count verification', 'Surgical workflow analysis', 'Tray preparation automation'],
    includes: ['Tray images', 'Instrument segmentation', 'Count labels', 'Layout annotations'],
    collectionMethod: 'Overhead cameras in surgical prep and OR environments',
    accuracy: '99.6%',
    dateAdded: '2026-02',
  },
  {
    id: 'drone-terrain',
    name: 'DRONE_TERRAIN_MAPPING',
    description:
      'Aerial orthomosaic tiles and elevation models from drone surveys over agricultural, mining, and construction sites. Includes land cover classification.',
    category: 'robotics',
    sampleCount: 15000,
    price: 3999,
    format: 'GeoTIFF + SHP',
    tags: ['AERIAL', 'TERRAIN', 'MAPPING'],
    useCases: ['Terrain analysis', 'Volume estimation', 'Land cover classification'],
    includes: ['Orthomosaic tiles', 'Digital elevation models', 'Land cover masks', 'GPS metadata'],
    collectionMethod: 'Multi-rotor drones with RTK GPS and multispectral cameras',
    accuracy: '99.3%',
    dateAdded: '2026-03',
  },
]

export const categories = [
  'all',
  'healthcare',
  'manufacturing',
  'robotics',
  'agriculture',
  'logistics',
  'automotive',
  'retail',
  'construction',
]

export const sortOptions = [
  { value: 'name-asc', label: 'NAME: A→Z' },
  { value: 'price-asc', label: 'PRICE: LOW→HIGH' },
  { value: 'price-desc', label: 'PRICE: HIGH→LOW' },
  { value: 'samples-desc', label: 'SAMPLES: MOST' },
  { value: 'samples-asc', label: 'SAMPLES: LEAST' },
]
