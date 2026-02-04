'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Ground-Mounted Solar', href: '/services/ground-mounted-solar' },
      { name: 'Industrial Solar', href: '/services/industrial-solar' },
      { name: 'Scalable Solar', href: '/services/scalable-solar' },
    ]
  },
  { name: 'Process', href: '/process' },
  { name: 'Projects', href: '/projects' },
  { name: 'Clients', href: '/clients' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <rect x="5" y="8" width="12" height="24" rx="2" fill="#a3e635" />
                <rect x="23" y="8" width="12" height="24" rx="2" fill="#a3e635" />
                <circle cx="11" cy="14" r="3" fill="#1a2332" />
                <circle cx="29" cy="14" r="3" fill="#1a2332" />
              </svg>
              <span className="ml-2 text-xl font-bold text-[#1a2332] tracking-tight">
                IMPERRA ENERGY PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname.startsWith('/services')
                          ? "text-[#a3e635] bg-[#1a2332]"
                          : "text-[#1a2332] hover:bg-gray-100"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a3e635]/10 hover:text-[#1a2332]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname === item.href
                        ? "text-[#a3e635] bg-[#1a2332]"
                        : "text-[#1a2332] hover:bg-gray-100"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="flex items-center px-6 py-2.5 bg-[#a3e635] text-[#1a2332] font-semibold rounded-lg hover:bg-[#84cc16] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1a2332]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a2332]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-[#1a2332] font-medium rounded-lg hover:bg-gray-100"
                        >
                          {item.name}
                          <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1a2332]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 font-medium rounded-lg",
                          pathname === item.href
                            ? "text-[#a3e635] bg-[#1a2332]"
                            : "text-[#1a2332] hover:bg-gray-100"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block mx-4 mt-4 px-6 py-3 bg-[#a3e635] text-[#1a2332] font-semibold rounded-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
