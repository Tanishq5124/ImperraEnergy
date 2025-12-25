import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Solar Park EPC', path: '/services/solar-park-epc' },
    { name: 'Rooftop Solar EPC', path: '/services/rooftop-solar-epc' },
    { name: 'Solar Finance', path: '/services/solar-finance' },
    { name: 'Project Process', path: '/process' }
  ];

  return (
    <footer className="bg-[#192B43] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_93649df1-8706-4232-b05c-7656cd27df63/artifacts/qwlzc8ht_Gemini_Generated_Image_vmx23hvmx23hvmx2.png" 
              alt="Imperra Energy" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Powering India's transition to clean, reliable solar energy since {companyInfo.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a3e635]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a3e635]">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a3e635]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">{companyInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#a3e635]" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#a3e635]" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#a3e635] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a3e635] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a3e635] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#a3e635] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#a3e635] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};