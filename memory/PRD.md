# Imperra Energy Website - Product Requirements Document

## Original Problem Statement
Build a premium, multi-page website for "Imperra Energy Pvt Ltd" - a solar energy company. The site should include pages for Home, About, Services, Projects, Clients, Blog, and Contact with project filtering, contact forms, and animations.

## Current Architecture

### React/FastAPI Stack (Active)
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

### Next.js Migration (In Progress)
```
/app/nextjs-site/
├── app/                   # App Router pages (scaffold only)
├── lib/
│   └── data.ts           # Migrated data (72+ MW, 22 clients)
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Completed Features

### Phase 1: Basic Website (Complete)
- [x] Multi-page React website with routing
- [x] Home, About, Services, Projects, Clients, Blog, Contact pages
- [x] Mobile-responsive design
- [x] Contact form with backend integration

### Phase 2: Enhanced Features (Complete)
- [x] Hero Section redesign with trust badges
- [x] ROI Calculator (formula: System size = (bill / 1300) * 0.55)
- [x] FAQ Accordion section with 8 Q&As
- [x] Backend contact form saves to MongoDB
- [x] Admin page to view form submissions

### Data Updates (Complete - Dec 2024)
- [x] Updated MW installed: 72+ MW
- [x] Updated client count: 22 clients
- [x] Full client list with capacities updated

## Client Data (Source of Truth)
Total: 72.21 MW from 22 clients

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
1. **Next.js Migration - Phase 3**: Component & Page Migration
   - Recreate all UI components in /nextjs-site/components/
   - Build all pages with App Router
   - Integrate Framer Motion animations

### P1 - Medium Priority
2. **Next.js Migration - Phase 4**: API Routes & Forms
   - Create API route for contact form
   - Implement email notification (Resend/Nodemailer)
   - Database storage integration

### P2 - Low Priority
3. **Next.js Migration - Phase 5**: CMS & SEO
   - Sanity.io integration
   - Sitemap generation

## Known Issues

### Blocked
- **Custom domain API issue**: `imperraenergy.co.in` returns Cloudflare 520 error for backend API calls. Requires platform-level DNS/proxy configuration.

## API Endpoints
- `POST /api/contact-inquiries` - Save contact form
- `GET /api/contact-inquiries` - Retrieve submissions

## Database Schema
```javascript
contact_inquiries: {
  id, name, email, phone, company, 
  service, message, timestamp, status
}
```

## Tech Stack
- **Current**: React, FastAPI, MongoDB, CSS
- **Target**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Sanity.io
