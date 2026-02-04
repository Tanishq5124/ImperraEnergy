import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { companyInfo } from '@/lib/data'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
  ],
  services: [
    { name: 'Ground-Mounted Solar', href: '/services/ground-mounted-solar' },
    { name: 'Industrial Solar', href: '/services/industrial-solar' },
    { name: 'Scalable Solar', href: '/services/scalable-solar' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/#faq' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <rect x="5" y="8" width="12" height="24" rx="2" fill="#a3e635" />
                <rect x="23" y="8" width="12" height="24" rx="2" fill="#a3e635" />
                <circle cx="11" cy="14" r="3" fill="#1a2332" />
                <circle cx="29" cy="14" r="3" fill="#1a2332" />
              </svg>
              <span className="ml-2 text-lg font-bold">IMPERRA ENERGY</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Fast-scaling solar EPC company delivering high-performance renewable energy solutions. 
              72+ MW installed, targeting 500 MW in 3 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#a3e635] hover:text-[#1a2332] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#a3e635] hover:text-[#1a2332] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#a3e635] hover:text-[#1a2332] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-white text-sm">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-white text-sm break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Imperra Energy Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
