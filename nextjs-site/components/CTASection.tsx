'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Get a free site assessment and customized solar proposal. 
            Our experts will help you maximize savings and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919377999900">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-[#1a2332]">
                <Phone className="mr-2 w-5 h-5" />
                +91 93779 99900
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
