# Imperra Energy Website - Product Requirements Document

## Original Problem Statement
Build a premium, multi-page website for "Imperra Energy Pvt Ltd" - a solar energy company. The site should include pages for Home, About, Services, Projects, Clients, Blog, and Contact with project filtering, contact forms, and animations.

## Current Architecture

### React/FastAPI Stack (Port 3000 - Original)
```
/app
├── backend/
│   ├── server.py          # FastAPI with /api/contact-inquiries endpoint
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/    # Header, Footer, ContactForm, ROICalculator, FAQSection
│   │   ├── pages/         # Home, About, Services, Projects, Clients, Contact, Admin
│   │   └── mock.js        # Central data store (72+ MW, 22 clients)
│   └── package.json
```

### Next.js Stack (Port 3001 - NEW - Migration Complete)
```
/app/nextjs-site/
├── app/
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── process/page.tsx   # Process page
│   ├── projects/page.tsx  # Projects page
│   ├── clients/page.tsx   # Clients page
│   ├── blog/page.tsx      # Blog page
│   ├── contact/page.tsx   # Contact page
│   ├── api/contact/route.ts  # Contact API
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ROICalculator.tsx
│   ├── FAQSection.tsx
│   ├── StatsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ClientsSection.tsx
│   ├── CTASection.tsx
│   └── ui/                # Button, Card, Input, Textarea
├── lib/
│   ├── data.ts            # Company data (72+ MW, 22 clients)
│   └── utils.ts           # Utility functions
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Completed Features

### Phase 1: Basic Website (Complete - React)
- [x] Multi-page React website with routing
- [x] All pages implemented
- [x] Mobile-responsive design
- [x] Contact form with backend integration

### Phase 2: Enhanced Features (Complete - React)
- [x] Hero Section redesign with trust badges
- [x] ROI Calculator
- [x] FAQ Accordion section
- [x] Backend contact form saves to MongoDB
- [x] Admin page to view submissions

### Phase 3: Next.js Migration (Complete - Dec 2024)
- [x] Project setup with Next.js 16, TypeScript, Tailwind
- [x] All components migrated with Framer Motion animations
- [x] All pages recreated (Home, About, Services, Process, Projects, Clients, Blog, Contact)
- [x] Contact API route created
- [x] SEO metadata configured
- [x] Data updated to 72+ MW, 22 clients

## Client Data (Source of Truth)
Total: 72.21 MW from 22 clients (All Solar Parks)

| Client | Capacity |
|--------|----------|
| Sumeet Industries Ltd | 26 MW |
| Eagle Sizers | 5 MW |
| Aarti Synthetics | 5 MW |
| Accel International | 3 MW |
| Shree Balaji Processors | 3 MW |
| Eagle Yarns Pvt Ltd | 3 MW |
| VH PT System | 2.6 MW |
| Eagle Fashions Pvt Ltd | 2.6 MW |
| Kusum Silk Mills Pvt Ltd | 2.3 MW |
| Kamdhenu Enterprise | 2.23 MW |
| Eagle Fibres Ltd | 2.23 MW |
| Shriyaram Lifestyle LLP | 2 MW |
| Globela Pharma Pvt Ltd | 2 MW |
| Globela Industries Pvt Ltd | 2 MW |
| Shri Mahadev Silk Mills Pvt Ltd | 1.65 MW |
| Mahesh Dyeing and Printing Mills Pvt Ltd | 1.2 MW |
| Knits and Knots Pvt Ltd | 1.2 MW |
| Eagle Synthetics Pvt Ltd | 1.2 MW |
| Shree Naveen Silk Mills Pvt Ltd | 1 MW |
| JPB Fibers | 1 MW |
| Samrat Velvets LLP | 1 MW |
| Gulmohar Embroideries Pvt Ltd | 1 MW |

## Pending Tasks

### P0 - High Priority
1. **Phase 4**: Connect Next.js contact form to MongoDB + email notifications
2. **Switch primary frontend**: Replace React app with Next.js

### P1 - Medium Priority
3. **Phase 5**: Sanity.io CMS integration
4. **SEO**: Sitemap generation

### P2 - Low Priority
5. Production deployment configuration

## Known Issues

### Blocked
- **Custom domain API issue**: `imperraenergy.co.in` returns Cloudflare 520 error for backend API calls

## API Endpoints

### React/FastAPI (Port 8001)
- `POST /api/contact-inquiries` - Save contact form
- `GET /api/contact-inquiries` - Retrieve submissions

### Next.js (Port 3001)
- `POST /api/contact` - Save contact form (in-memory, needs MongoDB connection)
- `GET /api/contact` - Retrieve submissions

## Tech Stack
- **Current (React)**: React, FastAPI, MongoDB, CSS
- **New (Next.js)**: Next.js 16, TypeScript, Tailwind CSS, Framer Motion
- **Planned**: Sanity.io CMS

