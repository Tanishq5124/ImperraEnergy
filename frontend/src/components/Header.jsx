import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subLinks: [
        { name: 'Solar Park EPC', path: '/services/solar-park-epc' },
        { name: 'Rooftop Solar EPC', path: '/services/rooftop-solar-epc' },
        { name: 'Solar Finance', path: '/services/solar-finance' }
      ]
    },
    { name: 'Process', path: '/process' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#192B43]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#192B43]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_93649df1-8706-4232-b05c-7656cd27df63/artifacts/qwlzc8ht_Gemini_Generated_Image_vmx23hvmx23hvmx2.png" 
              alt="Imperra Energy" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        location.pathname.startsWith(link.path)
                          ? 'text-[#a3e635]'
                          : 'text-white hover:text-[#a3e635]'
                      }`}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-[#192c42] rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="block px-4 py-2 text-sm text-white hover:bg-[#a3e635]/10 hover:text-[#a3e635] transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#a3e635]'
                        : 'text-white hover:text-[#a3e635]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-[#192B43]/98 backdrop-blur-md">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#a3e635]'
                      : 'text-white hover:text-[#a3e635]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.path}
                    to={subLink.path}
                    className="block py-2 pl-4 text-sm text-gray-300 hover:text-[#a3e635]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold">
                Get Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};