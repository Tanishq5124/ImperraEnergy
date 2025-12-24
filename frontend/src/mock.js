// Mock data for Imperra Energy website

export const companyInfo = {
  name: "Imperra Energy Pvt. Ltd.",
  tagline: "ENERGY Engineered for tomorrow",
  founded: 2006,
  rating: "SMERA 1B",
  phone: "+91 99797 45404",
  email: "imperraenergypvtltd@gmail.com",
  address: "203, 2nd Floor, Orleans Complex, Sosyo Circle, Althan, Surat - 395017",
  experience: "20+",
  totalMW: "300+",
  thermalMW: "700",
  windSolarMW: "150"
};

export const stats = [
  { label: "MW Installed", value: 300, suffix: "+" },
  { label: "Years Expertise", value: 20, suffix: "+" },
  { label: "Thermal MW Delivered", value: 700, suffix: "" },
  { label: "Pan-India Presence", value: 15, suffix: "+", subtext: "States" }
];

export const services = [
  {
    id: 1,
    title: "Solar Park EPC",
    slug: "solar-park-epc",
    shortDesc: "Large-scale ground-mounted solar power plants with end-to-end EPC services",
    fullDesc: "Complete Engineering, Procurement, and Construction services for utility-scale solar parks. From feasibility studies to commissioning, we deliver turnkey solar power solutions with precision engineering and quality assurance.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    features: [
      "Site assessment and feasibility studies",
      "Engineering design and optimization",
      "Premium-grade module procurement",
      "Construction and installation",
      "Grid synchronization and commissioning",
      "Long-term O&M support"
    ],
    capacity: "300+ MW Installed"
  },
  {
    id: 2,
    title: "Rooftop Solar EPC",
    slug: "rooftop-solar-epc",
    shortDesc: "Industrial and commercial rooftop solar installations for energy independence",
    fullDesc: "Specialized rooftop solar solutions for industries and commercial establishments. We transform your rooftop into a power generation asset with custom-designed systems that maximize energy output and ROI.",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    features: [
      "Structural load analysis",
      "Custom system design",
      "Zero-capex financing options",
      "Net metering facilitation",
      "Remote monitoring systems",
      "Preventive maintenance"
    ],
    capacity: "100+ MW Commissioned"
  },
  {
    id: 3,
    title: "Solar Finance & Investor Services",
    slug: "solar-finance",
    shortDesc: "Tailored financing solutions and comprehensive investor guidance",
    fullDesc: "Comprehensive financial solutions for solar projects including low-interest loans, equity options, and complete investor services from project feasibility to commissioning and beyond.",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    features: [
      "Low-interest project financing",
      "Equity partnership options",
      "Subsidy and incentive management",
      "Investment feasibility analysis",
      "Risk assessment and mitigation",
      "Return on investment optimization"
    ],
    capacity: "150 MW Wind-Solar Hybrid Advisory"
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
  { name: "Filatex", logo: null },
  { name: "ThyssenKrupp", logo: null },
  { name: "Aarti Industries", logo: null },
  { name: "IL&FS", logo: null },
  { name: "Thermax", logo: null },
  { name: "Alembic", logo: null },
  { name: "JINDAL", logo: null },
  { name: "ipca", logo: null },
  { name: "KPI Global", logo: null }
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