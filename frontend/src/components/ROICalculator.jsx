import React, { useState } from 'react';
import { Calculator, TrendingUp, Zap, Clock, Wallet } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyBill: '',
    propertyType: 'Commercial',
    city: ''
  });
  
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSavings = (e) => {
    e.preventDefault();
    
    const bill = parseFloat(formData.monthlyBill);
    
    if (!bill || bill <= 0) {
      alert('Please enter a valid monthly bill amount');
      return;
    }

    // Calculations based on formulas
    const monthlySavings = bill * 0.60;
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings = annualSavings * 25;
    const systemSize = bill / 1300;
    const cost = systemSize * 30000;
    const investment = cost;
    const paybackPeriod = investment / annualSavings;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      lifetimeSavings: Math.round(lifetimeSavings),
      systemSize: systemSize.toFixed(2),
      investment: Math.round(investment),
      paybackPeriod: paybackPeriod.toFixed(1)
    });

    // Scroll to results
    setTimeout(() => {
      document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id="roi-calculator">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a3e635] rounded-full mb-4">
              <Calculator className="w-8 h-8 text-[#1a2332]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-3">
              Calculate Your Solar Savings
            </h2>
            <p className="text-lg text-gray-600">
              See how much you can save with solar energy in just 60 seconds
            </p>
          </div>

          {/* Calculator Form */}
          <Card className="border-2 border-[#a3e635]/30 shadow-xl mb-8">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={calculateSavings} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="monthlyBill" className="text-base font-semibold text-[#1a2332] mb-2 block">
                      Monthly Electricity Bill (₹) *
                    </Label>
                    <Input
                      id="monthlyBill"
                      name="monthlyBill"
                      type="number"
                      value={formData.monthlyBill}
                      onChange={handleChange}
                      placeholder="e.g., 50000"
                      required
                      className="text-lg h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="propertyType" className="text-base font-semibold text-[#1a2332] mb-2 block">
                      Property Type *
                    </Label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-base"
                    >
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-base font-semibold text-[#1a2332] mb-2 block">
                    City *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g., Mumbai"
                    required
                    className="text-lg h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-bold text-lg py-6"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My Savings
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && (
            <div id="calculator-results" className="space-y-6 animate-fade-in">
              {/* Main Savings Card */}
              <Card className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-[#1a2332] mb-2">
                    Your Potential Monthly Savings
                  </h3>
                  <div className="text-5xl md:text-6xl font-bold text-[#1a2332] mb-2">
                    {formatCurrency(results.monthlySavings)}
                  </div>
                  <p className="text-[#1a2332]/80 font-medium">
                    Based on 60% reduction in electricity costs
                  </p>
                </CardContent>
              </Card>

              {/* Detailed Results Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-2 border-[#a3e635]/30 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Recommended System Size</p>
                    <p className="text-2xl font-bold text-[#1a2332]">{results.systemSize} kW</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#a3e635]/30 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Wallet className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Estimated Investment</p>
                    <p className="text-2xl font-bold text-[#1a2332]">{formatCurrency(results.investment)}</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#a3e635]/30 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-[#1a2332]">{results.paybackPeriod} years</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#a3e635]/30 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#a3e635]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">25-Year Savings</p>
                    <p className="text-2xl font-bold text-[#1a2332]">{formatCurrency(results.lifetimeSavings)}</p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Card */}
              <Card className="border-2 border-[#1a2332] bg-gradient-to-br from-[#1a2332] to-[#2d3748]">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Start Saving?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Get a free, no-obligation site assessment from our experts
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-bold text-lg px-8 py-6"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Site Assessment
                  </Button>
                  <p className="text-xs text-gray-400 mt-4">* GST applicable on all prices</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
