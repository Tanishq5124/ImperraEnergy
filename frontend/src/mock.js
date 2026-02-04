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
    title: "Sumeet Industries Ltd",
    client: "Sumeet Industries Ltd",
    capacity: "26 MW",
    type: "Ground-Mounted",
    location: "Gujarat",
    year: 2024,
    description: "Largest single-site installation - utility-scale ground-mounted solar park",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    featured: true
  },
  {
    id: 2,
    title: "Eagle Sizers",
    client: "Eagle Sizers",
    capacity: "5 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Industrial solar installation for textile manufacturing facility",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: true
  },
  {
    id: 3,
    title: "Aarti Synthetics",
    client: "Aarti Synthetics",
    capacity: "5 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Complete EPC solution for synthetic textile production unit",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    featured: true
  },
  {
    id: 4,
    title: "Eagle Yarns Pvt Ltd",
    client: "Eagle Yarns Pvt Ltd",
    capacity: "3 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Rooftop solar system for yarn manufacturing",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  },
  {
    id: 5,
    title: "Shree Balaji Processors",
    client: "Shree Balaji Processors",
    capacity: "3 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Solar installation for textile processing facility",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    featured: false
  },
  {
    id: 6,
    title: "Accel International",
    client: "Accel International",
    capacity: "3 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Industrial solar system for manufacturing operations",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    featured: false
  },
  {
    id: 7,
    title: "VH PT System",
    client: "VH PT System",
    capacity: "2.6 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Commercial solar installation with net metering",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  },
  {
    id: 8,
    title: "Eagle Fashions Pvt Ltd",
    client: "Eagle Fashions Pvt Ltd",
    capacity: "2.6 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Rooftop solar for apparel manufacturing",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: false
  },
  {
    id: 9,
    title: "Kusum Silk Mills Pvt Ltd",
    client: "Kusum Silk Mills Pvt Ltd",
    capacity: "2.3 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Solar power for silk textile manufacturing",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    featured: false
  },
  {
    id: 10,
    title: "Eagle Fibres Ltd",
    client: "Eagle Fibres Ltd",
    capacity: "2.23 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Industrial solar for fiber manufacturing",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    featured: false
  },
  {
    id: 11,
    title: "Kamdhenu Enterprise",
    client: "Kamdhenu Enterprise",
    capacity: "2.23 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Commercial solar installation",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    featured: false
  },
  {
    id: 12,
    title: "Shriyaram Lifestyle LLP",
    client: "Shriyaram Lifestyle LLP",
    capacity: "2 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Solar system for textile manufacturing",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  },
  {
    id: 13,
    title: "Globela Pharma Pvt Ltd",
    client: "Globela Pharma Pvt Ltd",
    capacity: "2 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Pharmaceutical facility solar installation",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: false
  },
  {
    id: 14,
    title: "Globela Industries Pvt Ltd",
    client: "Globela Industries Pvt Ltd",
    capacity: "2 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Industrial manufacturing solar solution",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    featured: false
  },
  {
    id: 15,
    title: "Shri Mahadev Silk Mills Pvt Ltd",
    client: "Shri Mahadev Silk Mills Pvt Ltd",
    capacity: "1.65 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Silk manufacturing facility solar system",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    featured: false
  },
  {
    id: 16,
    title: "Mahesh Dyeing and Printing Mills Pvt Ltd",
    client: "Mahesh Dyeing and Printing Mills Pvt Ltd",
    capacity: "1.2 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Textile dyeing facility solar installation",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    featured: false
  },
  {
    id: 17,
    title: "Knits and Knots Pvt Ltd",
    client: "Knits and Knots Pvt Ltd",
    capacity: "1.2 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Textile manufacturing solar solution",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e",
    featured: false
  },
  {
    id: 18,
    title: "Eagle Synthetics Pvt Ltd",
    client: "Eagle Synthetics Pvt Ltd",
    capacity: "1.2 MW",
    type: "Industrial",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Synthetic textile production solar system",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: false
  },
  {
    id: 19,
    title: "Shree Naveen Silk Mills Pvt Ltd",
    client: "Shree Naveen Silk Mills Pvt Ltd",
    capacity: "1 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Silk processing facility solar installation",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
    featured: false
  },
  {
    id: 20,
    title: "JPB Fibers",
    client: "JPB Fibers",
    capacity: "1 MW",
    type: "Industrial",
    location: "Gujarat",
    year: 2024,
    description: "Fiber manufacturing solar system",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c",
    featured: false
  },
  {
    id: 21,
    title: "Samrat Velvets LLP",
    client: "Samrat Velvets LLP",
    capacity: "1 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Velvet textile manufacturing solar installation",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4",
    featured: false
  },
  {
    id: 22,
    title: "Gulmohar Embroideries Pvt Ltd",
    client: "Gulmohar Embroideries Pvt Ltd",
    capacity: "1 MW",
    type: "Rooftop",
    location: "Surat, Gujarat",
    year: 2024,
    description: "Embroidery manufacturing facility solar system",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2",
    featured: false
  }
];

export const clients = [
  { name: "Sumeet Industries Ltd", capacity: "26 MW", logo: null },
  { name: "Eagle Sizers", capacity: "5 MW", logo: null },
  { name: "Aarti Synthetics", capacity: "5 MW", logo: null },
  { name: "Eagle Yarns Pvt Ltd", capacity: "3 MW", logo: null },
  { name: "Shree Balaji Processors", capacity: "3 MW", logo: null },
  { name: "Accel International", capacity: "3 MW", logo: null },
  { name: "VH PT System", capacity: "2.6 MW", logo: null },
  { name: "Eagle Fashions Pvt Ltd", capacity: "2.6 MW", logo: null },
  { name: "Kusum Silk Mills Pvt Ltd", capacity: "2.3 MW", logo: null },
  { name: "Eagle Fibres Ltd", capacity: "2.23 MW", logo: null },
  { name: "Kamdhenu Enterprise", capacity: "2.23 MW", logo: null },
  { name: "Shriyaram Lifestyle LLP", capacity: "2 MW", logo: null },
  { name: "Globela Pharma Pvt Ltd", capacity: "2 MW", logo: null },
  { name: "Globela Industries Pvt Ltd", capacity: "2 MW", logo: null },
  { name: "Shri Mahadev Silk Mills Pvt Ltd", capacity: "1.65 MW", logo: null },
  { name: "Mahesh Dyeing and Printing Mills Pvt Ltd", capacity: "1.2 MW", logo: null },
  { name: "Knits and Knots Pvt Ltd", capacity: "1.2 MW", logo: null },
  { name: "Eagle Synthetics Pvt Ltd", capacity: "1.2 MW", logo: null },
  { name: "Shree Naveen Silk Mills Pvt Ltd", capacity: "1 MW", logo: null },
  { name: "JPB Fibers", capacity: "1 MW", logo: null },
  { name: "Samrat Velvets LLP", capacity: "1 MW", logo: null },
  { name: "Gulmohar Embroideries Pvt Ltd", capacity: "1 MW", logo: null }
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