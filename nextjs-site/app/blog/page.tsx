'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: "India's Solar Energy Transformation: 2024 Outlook",
    excerpt: "Exploring how India is accelerating towards its 500 GW renewable energy target with ambitious solar initiatives.",
    date: "2024-01-15",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "CAPEX vs OPEX: Choosing the Right Solar Model",
    excerpt: "Understanding different solar financing models for industrial applications and which one suits your business best.",
    date: "2024-01-10",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1735584509085-4a03c468ace4?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Ground-Mounted Solar Parks: Key Considerations",
    excerpt: "Essential factors to consider when planning a ground-mounted solar installation for your industry.",
    date: "2024-01-05",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1726866672851-5b99c837603c?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Understanding Net Metering in Gujarat",
    excerpt: "A comprehensive guide to net metering policies and benefits for commercial solar installations in Gujarat.",
    date: "2024-01-01",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Solar O&M: Maximizing System Performance",
    excerpt: "Best practices for operations and maintenance to ensure your solar system performs at its peak.",
    date: "2023-12-20",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1692128858397-25ee47444bd2?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Government Subsidies for Industrial Solar in 2024",
    excerpt: "Navigate the latest government incentives and subsidies available for industrial solar installations.",
    date: "2023-12-15",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  }
]

const categories = ['All', 'Industry News', 'Guides', 'Technical', 'Policy']

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Latest news, guides, and insights from the solar industry
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#a3e635] text-[#1a2332] text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a2332] mb-3 line-clamp-2 group-hover:text-[#a3e635] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto text-[#1a2332] hover:text-[#a3e635]">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest solar industry news and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 px-6 rounded-lg text-[#1a2332] w-full sm:w-80"
              />
              <Button size="lg" className="h-14 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
