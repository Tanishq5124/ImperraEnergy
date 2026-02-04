# Imperra Energy Website - Product Requirements Document

## Original Problem Statement
Build a premium, multi-page website for "Imperra Energy Pvt Ltd" - a solar energy company. The site should include pages for Home, About, Services, Projects, Clients, Blog, and Contact with project filtering, contact forms, and animations.

## Current Architecture

### Next.js Stack (Port 3000 - LIVE)
```
/app/frontend/           # Next.js application (migrated)
├── app/
│   ├── page.tsx         # Homepage
│   ├── about/page.tsx   # About page
│   ├── services/page.tsx
│   ├── process/page.tsx
│   ├── projects/page.tsx
│   ├── clients/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts  # Contact API (connects to FastAPI)
│   ├── sitemap.ts       # SEO Sitemap
│   ├── robots.ts        # Robots.txt
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx, Footer.tsx
│   ├── HeroSection.tsx, ROICalculator.tsx
│   ├── FAQSection.tsx, StatsSection.tsx
│   ├── ServicesSection.tsx, ClientsSection.tsx
│   └── ui/              # Button, Card, Input, Textarea
├── lib/
│   ├── data.ts          # Company data (70+ MW, 22 clients)
│   └── utils.ts
└── package.json

/app/backend/            # FastAPI backend
├── server.py           # API with MongoDB integration
└── requirements.txt

/app/frontend-react-backup/  # Old React app (backup)
```

## Completed Features

### Phase 1-2: Basic Website (Complete)
- [x] Multi-page website with all pages
- [x] Hero Section with trust badges
- [x] ROI Calculator
- [x] FAQ Accordion
- [x] Contact form with MongoDB storage

### Phase 3: Next.js Migration (Complete - Feb 2025)
- [x] Project migrated to Next.js 16 with App Router
- [x] TypeScript implementation
- [x] Tailwind CSS styling
- [x] Framer Motion animations
- [x] All pages recreated

### Phase 4: API & Form Integration (Complete - Feb 2025)
- [x] Contact form connected to MongoDB via FastAPI
- [x] Next.js API route proxies to backend

### Phase 5: SEO & Sitemap (Complete - Feb 2025)
- [x] sitemap.xml generated
- [x] robots.txt configured
- [x] SEO metadata on all pages

### Data Updates (Complete - Feb 2025)
- [x] Updated to 70+ MW installed
- [x] Updated company profile with new content
- [x] All pages reflect new data

## Company Data (Source of Truth)
- **Total MW Installed**: 70+
- **Target**: 500 MW in 3 years
- **Clients**: 22
- **Project Type**: All Solar Parks

### Client List
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

## API Endpoints

### Next.js API (Port 3000)
- `POST /api/contact` - Submit contact form (proxies to FastAPI)
- `GET /api/contact` - Retrieve inquiries

### FastAPI Backend (Port 8001)
- `POST /api/contact-inquiries` - Save contact form
- `GET /api/contact-inquiries` - Retrieve submissions

## Tech Stack
- **Frontend**: Next.js 16, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: FastAPI, MongoDB
- **SEO**: sitemap.xml, robots.txt

## Known Issues
- **Custom domain API**: `imperraenergy.co.in` may have Cloudflare 520 errors for API calls (platform-level)

## Future Enhancements (Backlog)
- Sanity.io CMS integration (for content management)
- Email notifications for contact form (Resend/Nodemailer)
- Blog post individual pages
- Service detail pages
