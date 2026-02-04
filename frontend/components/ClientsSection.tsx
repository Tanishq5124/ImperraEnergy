'use client'

import { motion } from 'framer-motion'
import { customers } from '@/lib/data'

export function ClientsSection() {
  // Show only first 10 clients in homepage section
  const displayClients = customers.slice(0, 10)

  const getInitials = (name: string) => {
    const words = name.split(' ')
    if (words.length === 1) {
      return name.substring(0, 2).toUpperCase()
    }
    return words.slice(0, 2).map(word => word[0]).join('').toUpperCase()
  }

  const getLogoColor = (name: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-red-500 to-red-600',
      'from-teal-500 to-teal-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600'
    ]
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            22+ clients across textiles, pharmaceuticals, and manufacturing sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {displayClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#a3e635]"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getLogoColor(client.name)} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-sm">{getInitials(client.name)}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center leading-tight mb-1">
                  {client.name}
                </p>
                <span className="text-xs bg-[#a3e635]/10 text-[#1a2332] px-2 py-0.5 rounded-full font-semibold">
                  {client.capacity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/clients"
            className="inline-flex items-center text-[#1a2332] font-semibold hover:text-[#a3e635] transition-colors"
          >
            View All 22 Clients
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
