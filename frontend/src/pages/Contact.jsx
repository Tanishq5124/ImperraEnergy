import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ContactForm } from '../components/ContactForm';
import { companyInfo } from '../mock';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/flagged/photo-1574359980899-5cf19389d281"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Let's discuss your solar energy requirements
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our team of solar energy experts is ready to help you transition to clean, 
                  cost-effective power solutions.
                </p>
              </div>

              {/* Contact Cards */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2332] mb-1">Phone</h3>
                      <a href={`tel:${companyInfo.phone}`} className="text-gray-700 hover:text-[#a3e635] transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2332] mb-1">Email</h3>
                      <a href={`mailto:${companyInfo.email}`} className="text-gray-700 hover:text-[#a3e635] transition-colors break-all">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2332] mb-1">Office Address</h3>
                      <p className="text-gray-700">{companyInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2332] mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-2 border-[#a3e635]/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#1a2332] mb-6">Send Us a Message</h2>
                  <p className="text-gray-700 mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2332] mb-8 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3!2d72.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Imperra Energy Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2332] mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'What is the typical timeline for a solar installation?',
                  answer: 'A typical solar installation takes 16-25 weeks from initial consultation to commissioning, depending on project size and complexity.'
                },
                {
                  question: 'Do you provide financing options?',
                  answer: 'Yes, we offer comprehensive financing solutions including low-interest loans, equity partnerships, and zero-capex models.'
                },
                {
                  question: 'What kind of maintenance is required?',
                  answer: 'Solar systems require minimal maintenance. We provide preventive maintenance schedules and 24/7 remote monitoring for optimal performance.'
                },
                {
                  question: 'How long is the warranty period?',
                  answer: 'Solar modules come with 25+ year performance warranties, while inverters and other components have 5-10 year warranties. We also provide comprehensive service warranties.'
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#1a2332] mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;