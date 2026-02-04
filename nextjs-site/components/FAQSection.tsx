'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "What is the typical payback period for a solar installation?",
    answer: "For commercial and industrial installations, the typical payback period ranges from 3-5 years depending on your current electricity rates, system size, and available incentives. After payback, you enjoy free electricity for the remaining 20+ years of system life."
  },
  {
    question: "Do you handle all government approvals and subsidies?",
    answer: "Yes, Imperra Energy provides complete support for all government liaisons including net metering approvals, DISCOM permissions, and subsidy applications. Our team handles the entire documentation and approval process."
  },
  {
    question: "What maintenance is required for solar systems?",
    answer: "Solar systems require minimal maintenance. Regular cleaning (monthly or quarterly) and annual inspections are typically sufficient. We offer comprehensive O&M (Operations & Maintenance) contracts to ensure optimal system performance."
  },
  {
    question: "What is the difference between CAPEX and Captive models?",
    answer: "In the CAPEX model, you own the solar system outright with upfront investment, enjoying maximum long-term savings. In the Captive/PPA model, a third party owns the system and you purchase power at reduced rates with minimal upfront cost."
  },
  {
    question: "What warranties do you provide?",
    answer: "We provide 25-year performance warranty on solar modules, 10-year warranty on inverters, and 5-year workmanship warranty on installation. Our systems use only Tier-1 components from globally recognized manufacturers."
  },
  {
    question: "How long does installation take?",
    answer: "Installation timeline depends on system size. Typically, a 1 MW system takes 4-6 weeks for installation after all approvals. Larger projects like our 26 MW installation are completed in phases over 3-6 months."
  },
  {
    question: "Can solar work during monsoon or cloudy days?",
    answer: "Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency (10-25% of peak output). Modern systems are designed to perform optimally across all weather conditions throughout the year."
  },
  {
    question: "What is net metering and how does it benefit me?",
    answer: "Net metering allows you to export excess solar power to the grid and receive credits on your electricity bill. This ensures you get value from all the power your system generates, even when your facility isn't consuming it."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#a3e635]/20 mb-6">
            <HelpCircle className="w-8 h-8 text-[#1a2332]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about solar energy and our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={cn(
                    "bg-white rounded-xl border-2 transition-all overflow-hidden",
                    openIndex === index ? "border-[#a3e635] shadow-lg" : "border-transparent shadow"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="font-semibold text-[#1a2332] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-[#1a2332] flex-shrink-0 transition-transform duration-300",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
