import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clients, testimonials } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Star } from 'lucide-react';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to get initials from company name
  const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length === 1) {
      return name.substring(0, 2).toUpperCase();
    }
    return words.slice(0, 2).map(word => word[0]).join('').toUpperCase();
  };

  // Function to generate consistent color based on name
  const getLogoColor = (name) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-red-500 to-red-600',
      'from-teal-500 to-teal-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600'
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1735584509085-4a03c468ace4"
            alt="Our Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Trusted by 70+ leading companies across India
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-4">Industry Leaders We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From textiles to pharmaceuticals, from logistics to manufacturing - powering diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 group"
              >
                <CardContent className="p-4 flex flex-col items-center justify-center h-32">
                  {/* Logo Circle with Initials */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getLogoColor(client.name)} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-sm">{getInitials(client.name)}</span>
                  </div>
                  {/* Company Name */}
                  <span className="text-sm font-semibold text-gray-700 text-center leading-tight mb-1">{client.name}</span>
                  {/* Capacity Badge */}
                  <span className="text-xs bg-[#a3e635]/10 text-[#1a2332] px-2 py-0.5 rounded-full font-semibold">{client.capacity}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the industry leaders who trust Imperra Energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#a3e635] text-[#a3e635]" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#1a2332]">{testimonial.client}</p>
                    <p className="text-sm text-gray-600">{testimonial.person}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a2332] mb-4">Industries We Serve</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Textiles & Garments',
              'Pharmaceuticals',
              'Manufacturing',
              'Logistics & Warehousing',
              'Food & Beverage',
              'Chemicals',
              'Engineering',
              'Consumer Goods'
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#a3e635]/10 to-transparent p-6 rounded-lg text-center border-2 border-transparent hover:border-[#a3e635] transition-all"
              >
                <p className="font-semibold text-[#1a2332]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join India's Leading Industries
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Imperra Energy for your solar transformation
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg px-8 py-6">
              Become Our Partner
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;