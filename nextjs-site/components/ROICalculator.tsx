'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Zap, IndianRupee, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export function ROICalculator() {
  const [bill, setBill] = useState('')
  const [propertyType, setPropertyType] = useState('Commercial')
  const [city, setCity] = useState('')
  const [results, setResults] = useState<{
    systemSize: number
    investment: number
    annualSavings: number
    paybackPeriod: number
    twentyFiveYearSavings: number
  } | null>(null)

  const calculateSavings = () => {
    const monthlyBill = parseFloat(bill)
    if (!monthlyBill || monthlyBill <= 0) return

    // Formula: System size (kW) = (bill / 1300) * 0.55
    const systemSize = (monthlyBill / 1300) * 0.55
    const costPerKW = 55000 // Average cost per kW installed
    const investment = systemSize * costPerKW
    const annualSavings = monthlyBill * 12 * 0.8 // 80% savings assumption
    const paybackPeriod = investment / annualSavings
    const twentyFiveYearSavings = annualSavings * 25 - investment

    setResults({
      systemSize: Math.round(systemSize * 100) / 100,
      investment: Math.round(investment),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      twentyFiveYearSavings: Math.round(twentyFiveYearSavings),
    })
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`
    }
    return `₹${amount.toLocaleString('en-IN')}`
  }

  return (
    <section className="py-20 bg-white" id="calculator">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#a3e635]/20 mb-6">
            <Calculator className="w-8 h-8 text-[#1a2332]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Calculate Your Solar Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you can save with solar energy in just 60 seconds
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Bill (₹) *
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 50000"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Residential">Residential</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="h-12"
                />
              </div>

              <Button
                onClick={calculateSavings}
                size="lg"
                className="w-full h-14 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My Savings
              </Button>

              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t"
                >
                  <h3 className="text-xl font-semibold text-[#1a2332] mb-6 text-center">
                    Your Estimated Savings
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-[#a3e635]/10 rounded-xl p-4 text-center">
                      <Zap className="w-6 h-6 text-[#1a2332] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-[#1a2332]">
                        {results.systemSize} kW
                      </p>
                      <p className="text-sm text-gray-600">System Size</p>
                    </div>
                    <div className="bg-[#a3e635]/10 rounded-xl p-4 text-center">
                      <IndianRupee className="w-6 h-6 text-[#1a2332] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-[#1a2332]">
                        {formatCurrency(results.investment)}
                      </p>
                      <p className="text-sm text-gray-600">Investment</p>
                    </div>
                    <div className="bg-[#a3e635]/10 rounded-xl p-4 text-center">
                      <Clock className="w-6 h-6 text-[#1a2332] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-[#1a2332]">
                        {results.paybackPeriod} yrs
                      </p>
                      <p className="text-sm text-gray-600">Payback Period</p>
                    </div>
                    <div className="bg-[#1a2332] rounded-xl p-4 text-center col-span-2 md:col-span-3">
                      <TrendingUp className="w-6 h-6 text-[#a3e635] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-[#a3e635]">
                        {formatCurrency(results.twentyFiveYearSavings)}
                      </p>
                      <p className="text-sm text-gray-300">25-Year Net Savings</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
