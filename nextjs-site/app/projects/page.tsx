'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { customers } from '@/lib/data'

// Generate projects from customers data
const projects = customers.map((customer, index) => ({
  id: index + 1,
  title: customer.name,
  client: customer.name,
  capacity: customer.capacity,
  type: 'Solar Park',
  location: customer.location,
  year: 2024,
  description: `Solar park installation for ${customer.name}`,
  image: [
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',
    'https://images.unsplash.com/photo-1692128858397-25ee47444bd2',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    'https://images.unsplash.com/photo-1726866672851-5b99c837603c',
    'https://images.unsplash.com/photo-1735584509085-4a03c468ace4',
    'https://images.unsplash.com/photo-1726866492047-7f9516558c6e',
  ][index % 6],
  featured: index < 3,
}))

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const filterOptions = ['All', 'Solar Park']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1692128858397-25ee47444bd2?auto=format&fit=crop&w=2000&q=80"
            alt="Our Projects"
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            72+ MW of solar park installations powering India's industrial growth
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  variant={filter === option ? 'default' : 'outline'}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="text-gray-600">
              Showing <strong>{filteredProjects.length}</strong> projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`${project.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-[#1a2332] text-xs font-semibold rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#a3e635] text-[#1a2332] text-sm font-bold rounded-full">
                        {project.capacity}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-yellow-400 text-[#1a2332] text-xs font-semibold rounded-full flex items-center gap-1">
                          ⭐ Featured Project
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
