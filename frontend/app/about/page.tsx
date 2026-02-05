'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Leaf, Award, Users, TrendingUp, Building2, Zap } from 'lucide-react'
import { companyProfile } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80"
            alt="About Imperra Energy"
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
            About Imperra Energy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A Strategic Joint Venture Advancing Renewable Energy Solutions
          </motion.p>
        </div>
      </section>

      {/* Parent Companies Banner */}
      <section className="py-8 bg-[#a3e635]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#1a2332]" />
              <span className="text-[#1a2332] font-semibold">A Joint Venture of</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <span className="text-[#1a2332] font-bold text-lg">Rathi Group of Companies</span>
              <span className="text-[#1a2332]">×</span>
              <span className="text-[#1a2332] font-bold text-lg">Eagle Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyProfile.overview}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-[#a3e635]/10 rounded-xl">
                  <Award className="w-8 h-8 text-[#1a2332] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1a2332]">Remarkable Achievement</h3>
                    <p className="text-gray-600 text-sm">{companyProfile.milestone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#a3e635]/10 rounded-xl">
                  <Target className="w-8 h-8 text-[#1a2332] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1a2332]">Ambitious Growth Plans</h3>
                    <p className="text-gray-600 text-sm">{companyProfile.target}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                alt="Solar Installation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#1a2332] text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-[#a3e635]">70+</p>
                <p className="text-sm">MW Installed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-[#a3e635]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-[#1a2332]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Solar Power Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {companyProfile.solarExcellence}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {companyProfile.commitment}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1a2332] to-[#2d3748] p-8 rounded-2xl text-white"
            >
              <div className="w-14 h-14 bg-[#a3e635]/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#a3e635]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">{companyProfile.vision}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] p-8 rounded-2xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#1a2332]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Our Mission</h3>
              <p className="text-[#1a2332]/80 leading-relaxed">{companyProfile.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {companyProfile.coreValues.map((value, index) => {
              const icons = [Lightbulb, Leaf, TrendingUp]
              const Icon = icons[index]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#a3e635] transition-colors"
                >
                  <div className="w-16 h-16 bg-[#a3e635]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#1a2332]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Imperra Energy?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {companyProfile.whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-[#a3e635] mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyProfile.industryExpertise}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-[#a3e635]/10 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">Market Outlook</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyProfile.marketOutlook}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-20 bg-gradient-to-br from-[#a3e635] to-[#84cc16]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Transforming the Energy Landscape
            </h2>
            <p className="text-lg text-[#1a2332]/80 mb-8">
              {companyProfile.conclusion}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#1a2332] text-white font-semibold rounded-lg hover:bg-[#2d3748] transition-colors"
            >
              Partner With Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
