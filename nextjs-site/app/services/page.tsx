'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/data'

const serviceImages = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1726866672851-5b99c837603c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1735584509085-4a03c468ace4?auto=format&fit=crop&w=800&q=80',
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
            alt="Our Services"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Comprehensive solar EPC solutions tailored for your business
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-4 py-1 bg-[#a3e635]/20 text-[#1a2332] text-sm font-semibold rounded-full mb-4">
                    {service.capacity}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#a3e635] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#1a2332]" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button size="lg">
                      Get Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#1a2332] text-white p-6 rounded-xl shadow-xl">
                      <p className="text-3xl font-bold text-[#a3e635]">{service.capacity.split(' ')[0]}</p>
                      <p className="text-sm">{service.capacity.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Models */}
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
              Investment Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the model that best fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#a3e635]/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#1a2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-2">CAPEX Model</h3>
                  <p className="text-[#a3e635] font-semibold mb-4">Invest to Own</p>
                  <p className="text-gray-600 mb-6">
                    Own your solar power plant with upfront investment. Enjoy long-term savings, 
                    complete control over energy generation, and attractive returns on investment.
                  </p>
                  <ul className="space-y-3">
                    {[
                      '100% ownership of assets',
                      'Maximum long-term savings',
                      'Eligible for subsidies and incentives',
                      'Accelerated depreciation benefits',
                      'Energy cost predictability for 25+ years'
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#a3e635]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#a3e635]/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#1a2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-2">Captive Model</h3>
                  <p className="text-[#a3e635] font-semibold mb-4">Energy for Your Use</p>
                  <p className="text-gray-600 mb-6">
                    Generate solar power specifically for your industrial or commercial consumption. 
                    Reduce electricity bills without upfront investment through our financing partners.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Zero or minimal upfront investment',
                      'Immediate reduction in energy costs',
                      'Energy security and independence',
                      'Protection from grid tariff escalation',
                      'Flexible payment structures'
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#a3e635]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
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
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a customized solar solution for your business
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg">
                Request Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
