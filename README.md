# Samples.click

**Samples** [samples.click](https://samples.click) helps robotics companies scale and outsource their training data collection. We deploy our own hardware in industries to collect authentic, real-world training data.

## Overview

Samples is a marketplace for niche datasets designed specifically for robotics and AI companies. We provide high-quality, labeled training data that companies can instantly click and download to train their models.

### What We Do

- **Deploy Hardware**: Our proprietary hardware is deployed directly in industrial settings
- **Collect Data**: We gather authentic training data from real-world environments
- **Deliver Instantly**: Customers can browse, purchase, and download datasets immediately

### Example Datasets

- **1,000 samples** of medical handwriting
- **10,000 samples** of a robot picking up a part in an industrial setting
- Industrial assembly operations
- Robotic manipulation tasks
- Agricultural sorting scenarios
- Warehouse navigation data

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd samples-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

## Project Structure

```
samples-app/
├── src/
│   ├── pages/
│   │   └── Lander.tsx      # Landing page component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Production build output
├── package.json
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## Features

- **Modern UI**: Bold, industrial design with glitch effects and animations
- **Dataset Catalog**: Browse available datasets with sample counts and pricing
- **Responsive Design**: Works across desktop and mobile devices
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Development

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript type checking is integrated into the build process. Run `npm run build` to check for type errors.

## License

Private - All rights reserved

---

**Samples.click** © 2024 | System Online
