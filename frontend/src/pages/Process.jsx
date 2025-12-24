import React, { useEffect } from 'react';
import { Lightbulb, MapPin, PenTool, FileText, Shield, Calendar, CheckCircle2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { processSteps } from '../mock';

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconMap = {
    Lightbulb,
    MapPin,
    PenTool,
    FileText,
    Shield,
    Calendar,
    CheckCircle2,
    Users
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Our Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Systematic approach ensuring excellence at every stage
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-6">8-Step Project Execution Framework</h2>
            <p className="text-xl text-gray-700">
              Our proven methodology ensures timely delivery, quality assurance, and long-term system performance. 
              Each phase is meticulously planned and executed by our expert team.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="mb-8 last:mb-0">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Card */}
                    <div className="flex-1 w-full">
                      <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#a3e635]">
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-[#a3e635]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-8 h-8 text-[#1a2332]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <span className="text-3xl font-bold text-[#a3e635]">0{step.id}</span>
                                <h3 className="text-2xl font-bold text-[#1a2332]">{step.title}</h3>
                              </div>
                              <p className="text-gray-700 text-lg">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Connector Line - Hidden on mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:flex flex-col items-center">
                        <div className="w-1 h-12 bg-[#a3e635]"></div>
                        <div className="w-3 h-3 bg-[#a3e635] rounded-full"></div>
                        <div className="w-1 h-12 bg-[#a3e635]"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-12 text-center">Quality Assurance Standards</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#a3e635]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">Component Quality</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Only Tier-1 solar modules and inverters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">All components tested and certified</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">25+ year module performance warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#a3e635]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">Installation Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Certified and trained installation teams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Compliance with all electrical codes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Rigorous safety protocols and audits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#a3e635]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">Testing & Commissioning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Comprehensive system performance testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Grid synchronization verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Complete documentation handover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#a3e635]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">Post-Installation Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">24/7 remote monitoring systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Preventive maintenance schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#a3e635] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Rapid response technical support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-6">Typical Project Timeline</h2>
            <p className="text-xl text-gray-700 mb-12">
              From initial consultation to full commissioning
            </p>
            
            <Card className="bg-gradient-to-br from-[#a3e635]/10 to-transparent border-2 border-[#a3e635]/30">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#1a2332]">Feasibility & Design</span>
                    <span className="text-[#a3e635] font-bold">2-4 weeks</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#1a2332]">Approvals & Financing</span>
                    <span className="text-[#a3e635] font-bold">4-6 weeks</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#1a2332]">Procurement & Construction</span>
                    <span className="text-[#a3e635] font-bold">8-12 weeks</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#1a2332]">Testing & Commissioning</span>
                    <span className="text-[#a3e635] font-bold">2-3 weeks</span>
                  </div>
                </div>
                <p className="mt-8 text-gray-600 text-sm">
                  *Timeline may vary based on project size, location, and regulatory requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Solar Project with Confidence
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience systematic execution backed by two decades of expertise
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;