// Mock data for Imperra Energy website

export const companyInfo = {
  name: "Imperra Energy Pvt. Ltd.",
  tagline: "ENERGY Engineered for tomorrow",
  founded: "Recent",
  rating: "Fast-Scaling EPC",
  phone: "+91 93779 99900",
  email: "imperraenergypvtltd@gmail.com",
  address: "203, 2nd Floor, Orleans Complex, Sosyo Circle, Althan, Surat - 395017",
  experience: "Emerging",
  totalMW: "50+",
  targetMW: "500",
  timeframe: "Next 3 Years"
};

export const stats = [
  { label: "MW Installed", value: 50, suffix: "+" },
  { label: "Active Clients", value: 22, suffix: "+" },
  { label: "Target (3 Years)", value: 500, suffix: " MW" },
  { label: "Pan-India Presence", value: 15, suffix: "+", subtext: "States" }
];

export const services = [
  {
    id: 1,
    title: "Ground-Mounted Solar Parks",
    slug: "ground-mounted-solar",
    shortDesc: "Large-scale solar infrastructure for utility and commercial applications",
    fullDesc: "Specializing in ground-mounted solar power projects with complete EPC services. From site selection to commissioning, we deliver utility-scale solar installations with proven track record of 50+ MW.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    features: [
      "Large-scale project execution (up to 26 MW single site)",
      "Complete site development and civil works",
      "Advanced grid integration solutions",
      "Performance optimization and monitoring",
      "Long-term O&M contracts",
      "Fast-track project delivery"
    ],
    capacity: "50+ MW Installed"
  },
  {
    id: 2,
    title: "Industrial Solar Solutions",
    slug: "industrial-solar",
    shortDesc: "Customized solar solutions for industries and commercial establishments",
    fullDesc: "Tailored solar installations for textile, pharmaceutical, and manufacturing industries. Proven expertise in delivering reliable power solutions that reduce operational costs and ensure energy security.",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    features: [
      "Industry-specific system design",
      "Rooftop and ground-mount options",
      "Energy audit and optimization",
      "Net metering facilitation",
      "Zero-downtime installation",
      "Comprehensive warranty coverage"
    ],
    capacity: "22+ Active Industrial Clients"
  },
  {
    id: 3,
    title: "Scalable Solar Infrastructure",
    slug: "scalable-solar",
    shortDesc: "Future-ready solar systems designed for expansion and growth",
    fullDesc: "Building solar infrastructure that grows with your business. Our scalable solutions allow for phased implementation while maintaining system efficiency and performance.",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    features: [
      "Modular system architecture",
      "Expansion-ready design",
      "Flexible financing options",
      "Government subsidy assistance",
      "Accelerated depreciation benefits",
      "Multi-site project management"
    ],
    capacity: "500 MW Target Next 3 Years"
  }
];

export const solarModels = [
  {
    title: "CAPEX Model",
    subtitle: "Invest to Own",
    description: "Own your solar power plant with upfront investment. Enjoy long-term savings, complete control over energy generation, and attractive returns on investment.",
    benefits: [
      "100% ownership of assets",
      "Maximum long-term savings",
      "Eligible for subsidies and incentives",
      "Accelerated depreciation benefits",
      "Energy cost predictability for 25+ years"
    ],
    icon: "Building2"
  },
  {
    title: "Captive Model",
    subtitle: "Energy for Your Use",
    description: "Generate solar power specifically for your industrial or commercial consumption. Reduce electricity bills without upfront investment through our financing partners.",
    benefits: [
      "Zero or minimal upfront investment",
      "Immediate reduction in energy costs",
      "Energy security and independence",
      "Protection from grid tariff escalation",
      "Flexible payment structures"
    ],
    icon: "Zap"
  }
];

export const processSteps = [
  {
    id: 1,
    title: "Brainstorming",
    description: "Understanding your energy needs and project objectives",
    icon: "Lightbulb"
  },
  {
    id: 2,
    title: "Site Feasibility",
    description: "Comprehensive site assessment and resource analysis",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "Engineering Design",
    description: "Detailed system design and optimization",
    icon: "PenTool"
  },
  {
    id: 4,
    title: "Documentation",
    description: "Complete technical and regulatory documentation",
    icon: "FileText"
  },
  {
    id: 5,
    title: "Government Liaising",
    description: "Approvals, permits, and subsidy facilitation",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Project Planning",
    description: "Detailed execution plan and resource allocation",
    icon: "Calendar"
  },
  {
    id: 7,
    title: "Quality Assurance",
    description: "Stringent quality control at every stage",
    icon: "CheckCircle2"
  },
  {
    id: 8,
    title: "Manpower Management",
    description: "Skilled workforce deployment and coordination",
    icon: "Users"
  }
];

export const projects = [
  {
    id: 1,
    title: "TATA Solar - Multi-State EPC",
    client: "TATA Solar",
    capacity: "100+ MW",
    type: "Solar Park",
    location: "Across 3 States",
    year: 2023,
    description: "Engineering and Construction services for large-scale solar installations across multiple states",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    featured: true
  },
  {
    id: 2,
    title: "Sumeet Industries Solar Park",
    client: "Sumeet Industries Ltd",
    capacity: "30 MW",
    type: "Solar Park",
    location: "Gujarat",
    year: 2023,
    description: "Complete EPC solution for utility-scale solar power generation",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: true
  },
  {
    id: 3,
    title: "KP Group Solar Installation",
    client: "KP Group",
    capacity: "15 MW",
    type: "Solar Park",
    location: "Gujarat",
    year: 2022,
    description: "Ground-mounted solar power plant with advanced monitoring",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    featured: true
  },
  {
    id: 4,
    title: "Reliance Industries Rooftop",
    client: "Reliance Industries",
    capacity: "10 MW",
    type: "Rooftop",
    location: "Multiple Facilities",
    year: 2022,
    description: "Large-scale industrial rooftop solar installations",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  },
  {
    id: 5,
    title: "Filatex Ltd Solar System",
    client: "Filatex Ltd",
    capacity: "2 MW AC / 2.4 MW DC",
    type: "Rooftop",
    location: "Industrial Facility",
    year: 2022,
    description: "Textile industry rooftop solar for captive consumption",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    featured: false
  },
  {
    id: 6,
    title: "Gulmohar Embroideries",
    client: "Gulmohar Embroideries Pvt Ltd",
    capacity: "1.2 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2021,
    description: "Rooftop solar for textile manufacturing facility",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    featured: false
  },
  {
    id: 7,
    title: "Shikhar Prints Solar Installation",
    client: "Shikhar Prints Pvt Ltd",
    capacity: "825 kW AC / 1.0 MW DC",
    type: "Rooftop",
    location: "Gujarat",
    year: 2021,
    description: "Industrial rooftop solar with net metering",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  }
];

export const clients = [
  { name: "TATA Solar", logo: null },
  { name: "Reliance Industries", logo: null },
  { name: "Amul", logo: null },
  { name: "Coca-Cola", logo: null },
  { name: "SIEMENS", logo: null },
  { name: "Raymond", logo: null },
  { name: "Linde Engineering", logo: null },
  { name: "Zydus Cadila", logo: null },
  { name: "PARLE", logo: null },
  { name: "FILATEX", logo: null },
  { name: "ThyssenKrupp", logo: null },
  { name: "Aarti Industries", logo: null },
  { name: "IL&FS", logo: null },
  { name: "Thermax", logo: null },
  { name: "Alembic", logo: null },
  { name: "JINDAL", logo: null },
  { name: "ipca", logo: null },
  { name: "KPI Global", logo: null },
  { name: "TKIS (UDHE)", logo: null },
  { name: "TECSO GLOBAL", logo: null },
  { name: "Saurashtra Poly Films", logo: null },
  { name: "Chiripal Poly Films", logo: null },
  { name: "Transpek Industry", logo: null },
  { name: "AIA Engineering", logo: null },
  { name: "Linde", logo: null },
  { name: "Mahesh Dyeing Group", logo: null },
  { name: "Deep Industries", logo: null },
  { name: "Mahesh", logo: null },
  { name: "Arvind Store", logo: null },
  { name: "Shree Dyeing & Printing Mills", logo: null },
  { name: "Mahadev Silk Mills", logo: null },
  { name: "Eagle Group", logo: null },
  { name: "Shree Siddhi Group", logo: null },
  { name: "Deepak Phenolics", logo: null },
  { name: "Naveen", logo: null },
  { name: "Keshvi Apparels", logo: null },
  { name: "Siddhi Vinayak", logo: null },
  { name: "Nilkanth Steel", logo: null },
  { name: "Enhance Lifestyle", logo: null },
  { name: "Simpex", logo: null },
  { name: "Astron", logo: null },
  { name: "Pashupati Cotton", logo: null },
  { name: "Draja Industries", logo: null },
  { name: "Sunkon Energy", logo: null },
  { name: "Kutch Chemical Industries", logo: null },
  { name: "Integrity Solar India", logo: null },
  { name: "Samurai Holdings", logo: null },
  { name: "Som Shiva Impex", logo: null },
  { name: "Pashupati Cotspin", logo: null },
  { name: "Sagar Samrat Seafood", logo: null },
  { name: "Devarsons Industries", logo: null },
  { name: "Nature Fresh Industries", logo: null },
  { name: "G-one Agro Products", logo: null },
  { name: "Chokshi Texlen", logo: null },
  { name: "Kuber Texlen", logo: null },
  { name: "Sruti Filatex", logo: null },
  { name: "MG Processors", logo: null },
  { name: "HS Weavers", logo: null },
  { name: "Sudha Dyeing & Printing Mill", logo: null },
  { name: "Suprabhat Prints", logo: null },
  { name: "Suryoday Fashions", logo: null },
  { name: "Shikhar Prints", logo: null },
  { name: "Armo Synthetics", logo: null },
  { name: "Pragati Fashions", logo: null },
  { name: "Pratistha Prints", logo: null },
  { name: "Pragati Synthetics", logo: null },
  { name: "Harmony Yarns", logo: null },
  { name: "Ruchi Twisters", logo: null },
  { name: "Pankaj Enka", logo: null },
  { name: "Ganesh Laxmi Group", logo: null },
  { name: "Greenbloom Energy", logo: null },
  { name: "Gulmohar Embroideries", logo: null },
  { name: "Knits N Knots Industries", logo: null },
  { name: "JP.B Fiber", logo: null },
  { name: "Shri Balaji Processors", logo: null },
  { name: "Kusum Silk Mills", logo: null },
  { name: "Samrat Velvet", logo: null },
  { name: "Sumeet Industries", logo: null }
];

export const whyChoose = [
  {
    title: "Premium-Grade Materials",
    description: "Only Tier-1 solar modules and components from globally recognized manufacturers",
    icon: "Award"
  },
  {
    title: "Precision Workmanship",
    description: "Engineering excellence with stringent quality control at every project phase",
    icon: "Target"
  },
  {
    title: "Expert-Led Maintenance",
    description: "Proactive O&M services ensuring optimal performance and longevity",
    icon: "Wrench"
  },
  {
    title: "Proven Industry Legacy",
    description: "20+ years of sectoral expertise with 300+ MW successful installations",
    icon: "TrendingUp"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Leadership Team",
    role: "Founders & Directors",
    description: "30+ years of combined experience in power plant engineering and EPC",
    image: "https://images.pexels.com/photos/6158868/pexels-photo-6158868.jpeg"
  },
  {
    id: 2,
    name: "Engineering Team",
    role: "Design & Execution",
    description: "Expert engineers specialized in solar power plant design and commissioning",
    image: "https://images.unsplash.com/flagged/photo-1574359980899-5cf19389d281"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "India's Solar Energy Transformation: 2024 Outlook",
    excerpt: "Exploring how India is accelerating towards its 500 GW renewable energy target",
    date: "2024-01-15",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
  },
  {
    id: 2,
    title: "CAPEX vs OPEX: Choosing the Right Solar Model",
    excerpt: "Understanding different solar financing models for industrial applications",
    date: "2024-01-10",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4"
  },
  {
    id: 3,
    title: "Rooftop Solar: Key Considerations for Industries",
    excerpt: "Structural requirements and ROI calculations for industrial rooftop solar",
    date: "2024-01-05",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c"
  }
];

export const testimonials = [
  {
    id: 1,
    client: "TATA Solar",
    quote: "Imperra Energy's engineering precision and execution speed helped us deliver multiple projects across states on schedule.",
    person: "Project Director",
    rating: 5
  },
  {
    id: 2,
    client: "Reliance Industries",
    quote: "Outstanding technical capability and commitment to quality. Our 10 MW rooftop installation exceeded performance expectations.",
    person: "Energy Manager",
    rating: 5
  },
  {
    id: 3,
    client: "Sumeet Industries",
    quote: "The 30 MW solar park was completed within timeline with exceptional quality standards. Highly professional team.",
    person: "Managing Director",
    rating: 5
  }
];