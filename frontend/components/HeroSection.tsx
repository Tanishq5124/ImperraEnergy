'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/80 to-[#1a2332]/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-[#a3e635]" />
            <span className="text-white text-sm font-medium">MNRE Certified Solar EPC Company</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Cut Your Electricity Bills by{' '}
            <span className="text-[#a3e635]">60%</span> with Premium Solar Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            India's fast-scaling solar EPC company. From 70+ MW installed to 500 MW target 
            in 3 years. Ground-mounted solar parks for industries across India.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#a3e635]" />
              <span className="text-white font-semibold">70+ MW Installations</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#a3e635]" />
              <span className="text-white font-semibold">MNRE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#a3e635]" />
              <span className="text-white font-semibold">25-Year Warranty</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#calculator">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                Calculate Your Savings
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-[#1a2332]">
                Get Free Site Assessment
              </Button>
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-gray-400"
          >
            Zero upfront cost financing available • Government subsidy assistance • 
            Fast-track project delivery
          </motion.p>
        </div>
      </div>
    </section>
  )
}
