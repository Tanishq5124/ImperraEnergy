import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      question: "How much can I really save with solar panels?",
      answer: "With solar panels, you can save 50-60% on your monthly electricity bills. For example, if your current bill is ₹50,000 per month, you can save approximately ₹30,000 monthly, which amounts to ₹3.6 lakhs annually and ₹90 lakhs over 25 years. The actual savings depend on your consumption pattern, system size, and local electricity rates."
    },
    {
      question: "How long does installation take?",
      answer: "The actual installation of solar panels takes 2-5 days depending on system size. However, the complete process from approval to commissioning typically takes 6-12 weeks, which includes site assessment, design approval, government paperwork, procurement, installation, and grid connection. We ensure faster execution with our dedicated project management team."
    },
    {
      question: "What happens on cloudy days or at night?",
      answer: "Solar panels generate reduced power on cloudy days but still produce electricity. At night, you draw power from the grid. With net metering, excess power generated during sunny days is fed back to the grid, earning you credits that offset nighttime usage. Alternatively, you can opt for battery storage systems for complete energy independence."
    },
    {
      question: "What is the warranty and maintenance required?",
      answer: "Solar panels come with a 25-year performance warranty, inverters have 5-10 year warranties, and we provide comprehensive service warranties. Maintenance is minimal - just periodic cleaning (2-4 times per year) and annual system inspections. Our O&M packages include 24/7 remote monitoring, preventive maintenance, and rapid response technical support."
    },
    {
      question: "Do I need to pay upfront? Are EMI options available?",
      answer: "No, you don't need to pay the full amount upfront. We offer flexible financing options including zero-downpayment plans, EMI starting at 9.99% interest, government subsidy assistance, and both CAPEX (own the system) and OPEX (no upfront cost) models. We also help you maximize available subsidies and tax benefits."
    },
    {
      question: "Will solar panels work on my roof type?",
      answer: "Yes! Solar panels can be installed on all roof types - RCC flat roofs, sloped tile roofs, metal roofs, and even ground-mounted systems. Our engineers conduct a structural load analysis to ensure your roof can safely support the system. We customize the mounting structure based on your specific roof type and orientation for optimal performance."
    },
    {
      question: "What is net metering and how does it work?",
      answer: "Net metering is a billing mechanism that credits solar system owners for the excess electricity they feed back to the grid. When your solar panels produce more power than you consume, the surplus goes to the grid and your meter runs backward, earning you credits. These credits offset the electricity you draw from the grid at night or during low production periods, significantly reducing your electricity bills."
    },
    {
      question: "What government subsidies are available for solar?",
      answer: "The Government of India offers subsidies through MNRE (Ministry of New and Renewable Energy) for rooftop solar installations. Residential consumers can get up to 40% subsidy for systems up to 3 kW, and 20% for systems above 3 kW up to 10 kW. Commercial and industrial units are eligible for accelerated depreciation benefits (40% in first year) and various state-level incentives. We handle all subsidy documentation and application processes for you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a3e635]/10 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-[#1a2332]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about going solar
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-[#a3e635] transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-[#1a2332] pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Below FAQ */}
          <div className="mt-12 text-center bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border-2 border-[#a3e635]/30">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our solar experts are here to help you make the right decision
            </p>
            <a href="/contact">
              <button className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-bold px-8 py-4 rounded-md text-lg transition-colors">
                Talk to an Expert
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
