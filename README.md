# MONOLITH

Security Infrastructure for Developers & Agents.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Demo-Live-brightgreen)](https://dima3939.github.io/next/)

All-in-one platform to securely manage application secrets, certificates, and privileged access across cloud, on-premises, and agent infrastructure.

[Explore Live Demo →](https://dima3939.github.io/next/)

---

## Overview

MONOLITH centralizes identity and credential management across developer workflows and automated agents:

- **Secrets Management**: Synchronize, rotate, and audit application credentials across development, staging, and production environments with role-based access control.
- **Agent Vault**: Scoped access and placeholder brokering that attaches credentials at the proxy layer so automated tools never handle raw secrets directly.
- **Certificate Management (PKI)**: Automated TLS/SSL certificate issuance, health monitoring, and zero-downtime renewal.
- **Privileged Access Management (PAM)**: Just-in-time access granting, session recording, and automatic expiration.
- **Theme Support**: Integrated dark and light themes with system synchronization and persistent preference storage.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Deployment**: GitHub Pages (`output: 'export'`)

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+ or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dima3939/next.git
cd next

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/next](http://localhost:3000/next) in your browser.

---

## Build & Deployment

### Production Build

```bash
npm run build
```

Generates optimized static assets in the `out/` directory configured with `basePath: '/next'`.

### GitHub Pages Deployment

```bash
npm run deploy
```

Builds the application and publishes the `out/` directory to the `gh-pages` branch.

---

## License

MIT
