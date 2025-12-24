import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Target, Wrench, TrendingUp, Building2, Zap, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Counter } from '../components/Counter';
import { stats, services, whyChoose, solarModels, processSteps, projects, clients, companyInfo } from '../mock';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconMap = {
    Award,
    Target,
    Wrench,
    TrendingUp,
    Building2,
    Zap
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
            alt="Solar Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Energy. <span className="text-[#a3e635]">Engineered</span> for Tomorrow.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
              Powering India's transition to clean, reliable solar energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link to="/contact">
                <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
                  Get a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a2332] font-semibold text-lg px-8 py-6">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                {stat.subtext && <div className="text-xs text-gray-500">{stat.subtext}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1764885517995-a4a4f940e1a6"
                alt="Imperra Energy"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1a2332] mb-6">About Imperra Energy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2006, Imperra Energy has been at the forefront of India's solar revolution. 
                With over two decades of sectoral expertise, we've established ourselves as Gujarat's 
                only dedicated power plant consultant, trusted by industry leaders nationwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our SMERA 1B rating reflects our commitment to strong project delivery and financial 
                robustness, ensuring every solar installation meets the highest standards of quality 
                and performance.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#1a2332] mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To help industries transition toward cleaner, cost-effective, and reliable energy 
                  through captive and renewable power solutions.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#1a2332] mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver intelligent, technology-first solutions for faster, cost-efficient 
                  project execution and long-term client success and satisfaction.
                </p>
              </div>
              <Link to="/about">
                <Button className="bg-[#1a2332] text-white hover:bg-[#2d3748]">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Imperra */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">Why Choose Imperra</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineering excellence backed by proven expertise and unwavering commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#a3e635]">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#a3e635] transition-colors">
                      <Icon className="w-8 h-8 text-[#1a2332] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a2332] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solar EPC solutions tailored to your energy needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.capacity}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">{service.shortDesc}</p>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-[#a3e635] group-hover:text-[#1a2332] group-hover:border-[#a3e635] transition-colors">
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

      {/* Solar Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">Solar Investment Models</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the model that best fits your business objectives and financial strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solarModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-[#a3e635] rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#1a2332]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a2332]">{model.title}</h3>
                        <p className="text-[#a3e635] font-semibold">{model.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{model.description}</p>
                    <div>
                      <h4 className="font-semibold text-[#1a2332] mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#a3e635] mr-2">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by India's leading industries for mission-critical solar installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#a3e635] text-[#1a2332] px-3 py-1 rounded-full text-sm font-bold">
                    {project.capacity}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2">{project.client}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-[#1a2332] text-white hover:bg-[#2d3748]">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">70+ leading companies across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-bold text-gray-700">{client.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/clients">
              <Button variant="outline" className="border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white">
                View All Clients
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a2332] to-[#2d3748] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Planning a Solar Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Talk to our experts for feasibility, execution, and financing guidance
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              <Phone className="mr-2 w-5 h-5" />
              Contact Imperra Energy
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;