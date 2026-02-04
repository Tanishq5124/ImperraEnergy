import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { companyInfo, teamMembers } from '../mock';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1764885517995-a4a4f940e1a6"
            alt="About Imperra Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Imperra Energy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Two decades of engineering excellence in solar EPC
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in <strong>2006</strong>, Imperra Energy Pvt. Ltd. has been pioneering India's solar energy 
                transformation for over two decades. What started as a vision to make clean energy accessible has 
                evolved into a legacy of engineering excellence and unwavering commitment to sustainable power solutions.
              </p>
              <p>
                Recognized as <strong>Gujarat's only dedicated power plant consultant</strong>, we've earned the trust 
                of India's leading industries through our technical expertise, precision execution, and long-term 
                partnership approach. Our <strong>SMERA 1B rating</strong> stands as a testament to our financial 
                robustness and consistent project delivery excellence.
              </p>
              <p>
                With over <strong>300+ MW of solar installations</strong> commissioned across the country, we've powered 
                industries from textiles to pharmaceuticals, from logistics to manufacturing. Every project reflects our 
                core philosophy: energy solutions engineered for tomorrow.
              </p>
              <p>
                Our leadership team brings <strong>30+ years of combined experience</strong> in power plant engineering, 
                having delivered <strong>700 MW of thermal projects</strong> and advised on <strong>150 MW of 
                wind-solar hybrid installations</strong>. This deep sectoral expertise enables us to navigate complex 
                technical challenges and deliver optimal solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-t-4 border-t-[#a3e635]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-[#a3e635]/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#1a2332]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a2332]">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700">
                  To help industries transition toward cleaner, cost-effective, and reliable energy through 
                  captive and renewable power solutions. We envision an India powered by sustainable energy, 
                  where every industry has access to clean, dependable electricity that drives growth without 
                  environmental compromise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#a3e635]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-[#a3e635]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#1a2332]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a2332]">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700">
                  To deliver intelligent, technology-first solutions for faster, cost-efficient project execution 
                  and long-term client success and satisfaction. We achieve this through precision engineering, 
                  premium-grade materials, proactive maintenance, and a partnership approach that extends well 
                  beyond project commissioning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every project and partnership
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[#1a2332]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Excellence</h3>
              <p className="text-gray-700">Unwavering commitment to quality and precision in every aspect</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#1a2332]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Partnership</h3>
              <p className="text-gray-700">Long-term relationships built on trust and mutual success</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-[#1a2332]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Innovation</h3>
              <p className="text-gray-700">Technology-first approach to solve complex energy challenges</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-[#1a2332]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Sustainability</h3>
              <p className="text-gray-700">Creating lasting value for clients and the environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert professionals with decades of power plant engineering experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-2">{member.name}</h3>
                  <p className="text-[#a3e635] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-8 text-center">Certifications & Recognition</h2>
            
            <Card className="border-2 border-[#a3e635]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-[#a3e635]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-12 h-12 text-[#1a2332]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2332] mb-3">SMERA 1B Rating</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Our SMERA 1B rating is a mark of strong project delivery capability and financial robustness. 
                      This certification validates our consistent performance, technical competence, and ability to 
                      execute large-scale solar EPC projects with excellence.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-[#1a2332] mb-1">Project Delivery</p>
                        <p className="text-sm text-gray-600">Proven track record of on-time, on-budget execution</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-[#1a2332] mb-1">Financial Strength</p>
                        <p className="text-sm text-gray-600">Robust financial health and operational stability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-6">
            Partner with Imperra Energy
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that two decades of expertise makes
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Start Your Solar Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;