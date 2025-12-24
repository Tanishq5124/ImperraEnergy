import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services } from '../mock';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-[#a3e635] font-semibold mb-4">{service.capacity}</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">{service.shortDesc}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/services" className="inline-flex items-center text-[#1a2332] hover:text-[#a3e635] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2332] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">{service.fullDesc}</p>

            <Card className="border-2 border-[#a3e635]/30 bg-gradient-to-br from-[#a3e635]/5 to-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-6">Key Features & Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-[#a3e635] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2332] mb-12 text-center">Our Approach</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Understanding your energy requirements, site conditions, and project objectives'
                },
                {
                  step: '2',
                  title: 'Feasibility Study',
                  description: 'Comprehensive technical and financial analysis including ROI projections'
                },
                {
                  step: '3',
                  title: 'Design & Engineering',
                  description: 'Detailed system design optimized for maximum energy output and efficiency'
                },
                {
                  step: '4',
                  title: 'Approvals & Financing',
                  description: 'Government permits, grid approvals, and project financing arrangement'
                },
                {
                  step: '5',
                  title: 'Construction & Installation',
                  description: 'Professional installation with stringent quality control and safety standards'
                },
                {
                  step: '6',
                  title: 'Commissioning & Support',
                  description: 'System testing, grid synchronization, and ongoing maintenance support'
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a3e635] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-[#1a2332]">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2332] mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a detailed proposal and cost estimate for your project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Request Proposal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;