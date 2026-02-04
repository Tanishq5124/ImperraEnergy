'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, PenTool, Calendar, Package, Wrench, CheckCircle, TrendingUp, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { processSteps } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-8 h-8" />,
  PenTool: <PenTool className="w-8 h-8" />,
  Calendar: <Calendar className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80"
            alt="Our Process"
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
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            End-to-end solar project execution with precision and excellence
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              From Concept to Commissioning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 8-step process ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#a3e635]/30 transform md:-translate-x-1/2" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-[#a3e635] rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                  <span className="text-[#1a2332] font-bold text-xl">{step.id}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#a3e635] transition-colors">
                    <div className="w-14 h-14 bg-[#a3e635]/20 rounded-xl flex items-center justify-center mb-4 text-[#1a2332]">
                      {iconMap[step.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Typical Project Timeline
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { phase: 'Assessment & Design', duration: '1-2 Weeks', desc: 'Site evaluation and system design' },
              { phase: 'Approvals', duration: '2-4 Weeks', desc: 'Documentation and permits' },
              { phase: 'Installation', duration: '4-8 Weeks', desc: 'Equipment and construction' },
              { phase: 'Commissioning', duration: '1-2 Weeks', desc: 'Testing and grid connection' },
            ].map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-[#a3e635] mb-2">{item.duration}</div>
                <h3 className="text-lg font-semibold text-[#1a2332] mb-2">{item.phase}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Solar Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through every step of the process
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
