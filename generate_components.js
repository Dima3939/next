const fs = require('fs');

console.log('Generating pixel-perfect MONOLITH components from Infisical exact HTML...');

// 1. NAVBAR
let navbarHtml = fs.readFileSync('extracted_navbar.html', 'utf8');
navbarHtml = navbarHtml.replace(/Infisical home/g, 'MONOLITH home');
navbarHtml = navbarHtml.replace(
  /<div aria-hidden="true" style="width:120px;height:20px"><\/div>/,
  '<div class="flex items-center gap-2 font-mono text-[14px] font-bold tracking-tight text-[#ebebeb]"><span class="w-2 h-2 rounded-full bg-[#c2d72a]"></span>MONOLITH</div>'
);
navbarHtml = navbarHtml.replace(/Secrets Management/g, 'Next.js 14 Core');
navbarHtml = navbarHtml.replace(/Certificate Management/g, 'Design Systems');
navbarHtml = navbarHtml.replace(/Privileged Access/g, 'Edge Infrastructure');
navbarHtml = navbarHtml.replace(/Agent Vault/g, '3D WebGL Canvas');
navbarHtml = navbarHtml.replace(/Infisical vs Hashicorp Vault/g, 'MONOLITH Architecture');

const navbarComponent = `import React from 'react';

export default function Navbar() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(navbarHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Navbar.tsx', navbarComponent);
console.log('Generated components/Navbar.tsx');

// 2. HERO
let heroHtml = fs.readFileSync('extracted_hero.html', 'utf8');
heroHtml = heroHtml.replace(
  'Give AI agents access, not secrets:',
  'Creative Engineering &amp; Next.js 14:'
);
heroHtml = heroHtml.replace(
  'live demo of Agent Vault on October 21',
  'v4.2 Architecture Released'
);
heroHtml = heroHtml.replace(
  'Security Infrastructure',
  'Creative Engineering'
);
heroHtml = heroHtml.replace(
  '<span style="position:relative;z-index:1">Agents</span>',
  '<span style="position:relative;z-index:1">Studios</span>'
);
heroHtml = heroHtml.replace(
  'All-in-one platform to securely manage application secrets, certificates, and privileged access across cloud, on-prem, and AI infrastructure.',
  'All-in-one digital laboratory to architect, build, and deploy high-performance Next.js 14 applications, 3D WebGL experiences, and kinetic brand systems.'
);
heroHtml = heroHtml.replace(
  'Get started for free',
  'Start Building Free'
);
heroHtml = heroHtml.replace(
  'Talk to an expert',
  'Schedule Architecture Call'
);
// Replace table secret names with tech stack modules
heroHtml = heroHtml.replace('API_KEY', 'NEXT_PUBLIC_ENGINE');
heroHtml = heroHtml.replace('stripe_api_key', 'WEBGL_CANVAS_3D');
heroHtml = heroHtml.replace('datadog_api_key', 'GPU_SHADER_PIPELINE');
heroHtml = heroHtml.replace('postgres_connection_url', 'FRAMER_MOTION_RUNTIME');
heroHtml = heroHtml.replace('redis_password', 'EDGE_ROUTING_GATEWAY');
heroHtml = heroHtml.replace('API_TOKEN_REFRESH', 'KINETIC_TYPO_CORE');
heroHtml = heroHtml.replace('Services', 'Shaders');
heroHtml = heroHtml.replace('gitlab_cicd_variables', 'POSTGRES_CACHE_LAYER');
heroHtml = heroHtml.replace('aws_credentials', 'REDIS_SESSION_KV');
heroHtml = heroHtml.replace('third_party_integrations', 'SPATIAL_AUDIO_SYNTH');
heroHtml = heroHtml.replace('dynamic-db', 'THREEJS_OPTIMIZER');
heroHtml = heroHtml.replace('azure-infisical-test', 'TAILWIND_TOKENS');
heroHtml = heroHtml.replace('aws-canary-prod-key', 'CANARY_RELEASE');
heroHtml = heroHtml.replace('/k8s-operator-secrets', '/webgl-shaders');
heroHtml = heroHtml.replace('/ai-agents', '/kinetic-canvas');

const heroComponent = `import React from 'react';

export default function Hero() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(heroHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Hero.tsx', heroComponent);
console.log('Generated components/Hero.tsx');

// 3. SERVICES (Meet all-in-one, Secrets & Agent Vault)
let secretsHtml = fs.readFileSync('extracted_product_secrets.html', 'utf8');
secretsHtml = secretsHtml.replace('identity security stack for developers and AI agents.', 'high-performance stack for modern web engineering.');
secretsHtml = secretsHtml.replace('Secrets, certificates, and privileged access — one platform, one identity model, one place to audit every credential your applications and agents use.', 'Next.js 14, 3D WebGL, kinetic design systems, and cloud edge infrastructure — one unified laboratory to engineer digital flagships.');
secretsHtml = secretsHtml.replace('Explore product features', 'Explore Architecture Overview');
secretsHtml = secretsHtml.replace('Secrets Management', 'Fullstack Next.js 14 Core');
secretsHtml = secretsHtml.replace('Sync, rotate, and audit application credentials across every environment and workload — without the sprawl of vault forks, env files, and ad-hoc scripts.', 'Server Actions, streaming SSR, parallel routes, and ISR caching engineered for zero-latency page transitions and sub-50ms TTFB.');
secretsHtml = secretsHtml.replace('Explore Secrets Management', 'Explore Next.js Core');
secretsHtml = secretsHtml.replace('Granular Access Controls', 'Streaming SSR & Edge Routing');
secretsHtml = secretsHtml.replace('Scope access to secrets by environment, path, and identity with fine-grained RBAC.', 'Deliver sub-millisecond page loads with dynamic streaming and edge network distribution across 300+ PoPs.');
secretsHtml = secretsHtml.replace('See Access Controls', 'See Edge Routing');
secretsHtml = secretsHtml.replace('Secret Rotation + Dynamic Secrets', 'Zero-Bundle Heavy Compute');
secretsHtml = secretsHtml.replace('Rotate credentials on a schedule and issue short-lived, on-demand secrets scoped to each request.', 'Offload heavy computations to server components with zero client-side JavaScript overhead.');
secretsHtml = secretsHtml.replace('See Secret Rotation', 'See Server Actions');
secretsHtml = secretsHtml.replace('Approval Workflows', 'Automated CI/CD Quality Gates');
secretsHtml = secretsHtml.replace('Require reviews for sensitive changes and access requests before they reach production.', 'Enforce strict bundle budgets, accessibility audits, and Lighthouse 100 performance scores on every commit.');
secretsHtml = secretsHtml.replace('See Approval Workflows', 'See Quality Gates');

let vaultHtml = fs.readFileSync('extracted_vault.html', 'utf8');
vaultHtml = vaultHtml.replace("Agents shouldn't see your secrets.", "Websites shouldn't be static.");
vaultHtml = vaultHtml.replace('Give agents access without handing them credentials.', 'Give your users cinematic 120 FPS immersion without sacrificing performance.');
vaultHtml = vaultHtml.replace('See Agent Vault', 'Explore 3D Canvas');
vaultHtml = vaultHtml.replace('@Agent our checkout p99 is spiking, can you investigate?', '@MONOLITH our landing conversion needs a cinematic lift, can we add 3D kinetic interaction?');
vaultHtml = vaultHtml.replace('Root cause: an N+1 query from the 10:30 deploy. Opened #412 to fix it, CI is green.', 'Procedural Three.js particle field initialized with WebGL 2.0 fallback. 120 FPS locked, bundle size +14KB.');
vaultHtml = vaultHtml.replace('Scoped access', 'GPU Hardware Acceleration');
vaultHtml = vaultHtml.replace('You decide which tools and APIs each agent can reach. Everything else is blocked at the proxy.', 'Custom GLSL fragment shaders compiled natively to deliver fluid interactive 3D with minimal CPU overhead.');
vaultHtml = vaultHtml.replace('No leaked secrets', 'Mobile & Battery Aware');
vaultHtml = vaultHtml.replace('The agent only ever sees placeholders. Real secrets are attached at the proxy and never reach the agent.', 'Dynamic adaptive resolution scaling ensures smooth framerates on lower-end devices while preserving battery life.');
vaultHtml = vaultHtml.replace('Full audit trail', 'Core Web Vitals 100');
vaultHtml = vaultHtml.replace('Every request an agent makes is routed through Infisical and logged, so you can see exactly what your agents are doing.', 'Zero cumulative layout shift (CLS: 0.00), lightning-fast interaction to next paint (INP < 50ms), and 100 score on PageSpeed.');

const combinedServicesHtml = secretsHtml + vaultHtml;
const servicesComponent = `import React from 'react';

export default function Services() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(combinedServicesHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Services.tsx', servicesComponent);
console.log('Generated components/Services.tsx');

// 4. PROJECTS (Certificates & PAM)
let certsHtml = fs.readFileSync('extracted_certs.html', 'utf8');
certsHtml = certsHtml.replace('Certificate Management', 'Design Systems & Kinetic Tokens');
certsHtml = certsHtml.replace('Run private CA hierarchies, issue certificates over ACME, and automate renewals across services, domains, and Kubernetes.', 'Multi-brand design tokens, fluid typography scales, dark/light contrast parity, and micro-interactions powered by Framer Motion.');
certsHtml = certsHtml.replace('Explore Certificate Management', 'Explore Design Systems');
certsHtml = certsHtml.replace('Private CA Hierarchy', 'Strict Design Tokens');
certsHtml = certsHtml.replace('ACME Protocol Support', 'Kinetic Micro-Interactions');
certsHtml = certsHtml.replace('Auto-Renewal & Revocation', 'Fluid Typography & Contrast');

let pamHtml = fs.readFileSync('extracted_pam.html', 'utf8');
pamHtml = pamHtml.replace('Privileged Access Management', 'Cloud Edge & Zero-Downtime Infrastructure');
pamHtml = pamHtml.replace('Time-bound, approved, recorded sessions on databases and servers without permanent credentials.', 'Multi-region failover, instant atomic rollbacks, automated preview environments, and enterprise SLA monitoring.');
pamHtml = pamHtml.replace('Explore Privileged Access Management', 'Explore Cloud Ops');
pamHtml = pamHtml.replace('Just-In-Time Access', 'Global Anycast Network');
pamHtml = pamHtml.replace('Session Recording', 'Instant Atomic Rollbacks');
pamHtml = pamHtml.replace('Audit & Compliance', 'Real-Time Telemetry & APM');

const combinedProjectsHtml = certsHtml + pamHtml;
const projectsComponent = `import React from 'react';

export default function Projects() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(combinedProjectsHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Projects.tsx', projectsComponent);
console.log('Generated components/Projects.tsx');

// 5. TECHSTACK (Integrations)
let intHtml = fs.readFileSync('extracted_integrations.html', 'utf8');
intHtml = intHtml.replace('Explore all integrations', 'Explore Supported Tech Stack');
const techStackComponent = `import React from 'react';

export default function TechStack() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(intHtml)} }} />
  );
}
`;
fs.writeFileSync('components/TechStack.tsx', techStackComponent);
console.log('Generated components/TechStack.tsx');

// 6. METRICS
let metricsHtml = fs.readFileSync('extracted_metrics.html', 'utf8');
metricsHtml = metricsHtml.replace('Everyone has secrets.<br/>We secure', 'Built for massive scale.<br/>We power over');
metricsHtml = metricsHtml.replace('10 billion', '10 million');
metricsHtml = metricsHtml.replace('every day.', 'daily interactions with zero downtime.');
const metricsComponent = `import React from 'react';

export default function Metrics() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(metricsHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Metrics.tsx', metricsComponent);
console.log('Generated components/Metrics.tsx');

// 7. TESTIMONIALS (Customer stories & Wall of Love)
let testimonialsHtml = fs.readFileSync('extracted_testimonials.html', 'utf8');
testimonialsHtml = testimonialsHtml.replace('Infisical customers are', 'MONOLITH partners are');
testimonialsHtml = testimonialsHtml.replace('happy', 'industry leaders');
testimonialsHtml = testimonialsHtml.replace('The only security tool', 'The only creative engineering platform');
testimonialsHtml = testimonialsHtml.replace(/Infisical/g, 'MONOLITH');

const testimonialsComponent = `import React from 'react';

export default function Testimonials() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(testimonialsHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Testimonials.tsx', testimonialsComponent);
console.log('Generated components/Testimonials.tsx');

// 8. CTA
let ctaHtml = fs.readFileSync('extracted_cta.html', 'utf8');
ctaHtml = ctaHtml.replace('Starting with Infisical is simple, fast, and free.', 'Building your next digital flagship is simple, fast, and ambitious.');
ctaHtml = ctaHtml.replace('Get started for free', 'Start Building Now');
ctaHtml = ctaHtml.replace('Talk to an expert', 'Schedule Architecture Call');

const ctaComponent = `import React from 'react';

export default function CTA() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(ctaHtml)} }} />
  );
}
`;
fs.writeFileSync('components/CTA.tsx', ctaComponent);
console.log('Generated components/CTA.tsx');

// 9. FOOTER
let footerHtml = fs.readFileSync('extracted_footer.html', 'utf8');
footerHtml = footerHtml.replace(/Infisical/g, 'MONOLITH');

const footerComponent = `import React from 'react';

export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(footerHtml)} }} />
  );
}
`;
fs.writeFileSync('components/Footer.tsx', footerComponent);
console.log('Generated components/Footer.tsx');

console.log('ALL COMPONENTS GENERATED SUCCESSFULLY!');
