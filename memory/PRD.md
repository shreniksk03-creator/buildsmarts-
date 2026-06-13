# Build Smarts Infra — Premium Luxury Construction Website

## Original Problem Statement (verbatim summary)
Fully responsive, premium, modern construction company website for **Build Smarts Infra** (Bengaluru). Tagline: *"Building Dreams with Precision & Innovation."* Tech: React + Tailwind. Palette: Dark Navy #0F172A, Gold #D4AF37, White, Light Gray. Single-page marketing site with: hero (video placeholder + animated counters), about (mission/vision/values), 7-member leadership team, services grid, Silver/Gold/Diamond construction packages with comparison table, why-choose-us, portfolio gallery + lightbox, 7-step process, testimonials carousel, FAQ accordion, contact form, WhatsApp floating button, back-to-top, footer. SEO + smooth scrolling + glassmorphism + framer motion. User opted: frontend-only (no backend), curated stock images, Coverr/Pexels video for hero, email integration skipped.

## Architecture
- React (CRA) + Tailwind + shadcn/ui components
- Framer Motion for animations, embla-carousel-react for testimonials/marquee
- Theme system: CSS variables + `[data-theme="light|dark"]` overrides; useTheme hook with module-level singleton store (useSyncExternalStore) + localStorage persistence + system-pref default
- No backend changes (frontend-only site)

## User Personas
- High-net-worth homeowners commissioning luxury villas (Bengaluru)
- Real-estate developers seeking commercial construction partners
- Architects / consultants browsing for turnkey collaborators

## Core Requirements (static)
- Premium dark-luxury aesthetic + accessible light theme
- Conversion-focused: multiple CTAs (Get Quote, Get Free Consultation, Choose Package, Cost Calculator, Brochure download, Lead magnet, WhatsApp)
- Transparent pricing with full materials comparison table

## Implemented (iteration 1 — 2026-06-13)
- All 13 sections: Navbar, Hero (video bg + counters), About, Team (7), Services (6), Packages (Silver/Gold/Diamond + comparison toggle), WhyChooseUs (8), Portfolio (2 + lightbox), Process (7-step timeline), Testimonials (Embla carousel), FAQ, Contact (no backend, toast confirmation), Footer, WhatsApp + BackToTop
- SEO meta tags, schema.org GeneralContractor JSON-LD
- 100% pass on iteration_1 test report

## Implemented (iteration 2 — 2026-06-13)
- Contrast/readability: gray-400 → gray-300/200 across About/Team/Services/WhyUs
- Z-index fix: WhatsApp moved to bottom-20, BackToTop to bottom-40 (no overlap with Emergent badge)
- Portfolio expanded to 8 projects with masonry + "View Full Gallery" modal
- LeadMagnet banner (First Name + Email + Download Now, no backend)
- **Light Theme** with sun/moon toggle in navbar + localStorage + system preference default
- New trust/conversion sections:
  - TrustBadges (ISO, Award, On-Time, Quality Assured)
  - ClientLogos auto-scrolling marquee (10 brands)
  - CostCalculator (interactive area/floors/package sliders + live ₹ estimate)
  - OngoingProjects (3 live builds with animated progress bars)
  - BeforeAfter drag-slider gallery (2 pairs)
  - GoogleReviews (4.9/5 rating + 4 review cards)
  - StickyEstimate left-side rotated CTA (desktop, appears after scroll>700)
  - BrochureDownload PDF CTA banner
  - Office Map iframe inside Contact
- 100% pass on iteration_2 test report

## Backlog / Next Items
- **P1**: Replace placeholder construction video (`/public/hero-bg.mp4` drop-in) with client-supplied footage
- **P1**: Replace placeholder `/build-smarts-infra-brochure.pdf` with the actual brochure PDF
- **P2**: Wire LeadMagnet + Contact form to email service (Resend / SendGrid) — user said "skip email" for now
- **P2**: Add admin endpoint to capture form submissions to MongoDB
- **P2**: Replace stock team photos with real headshots of Vardarajan / Sunbul / Raksha / Shivakumar / Arivu Arasan / Vishnu / Srinivas
- **P3**: Real Google Reviews API integration (currently static showcase)
- **P3**: Live project progress tracker (currently static %)
- **P3**: Cost calculator pricing tuned for plot vs built-up area distinction
