import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services } from '../mock';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1726866672851-5b99c837603c"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Complete solar EPC solutions from feasibility to commissioning
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#a3e635]">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-[#a3e635] font-semibold">{service.capacity}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">{service.shortDesc}</p>
                  <Link to={`/services/${service.slug}`}>
                    <Button className="w-full bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16]">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-8">End-to-End EPC Excellence</h2>
            <p className="text-xl text-gray-700 mb-12">
              From initial feasibility studies to long-term maintenance, we handle every aspect of your solar project with precision and expertise
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                'Site assessment and feasibility analysis',
                'Engineering design and optimization',
                'Premium component procurement',
                'Professional installation and construction',
                'Grid synchronization and commissioning',
                'Government approvals and subsidies',
                'Project financing solutions',
                'Long-term O&M support'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#a3e635] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get expert consultation and feasibility analysis for your solar requirements
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Request Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;