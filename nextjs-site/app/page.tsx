import { HeroSection } from '@/components/HeroSection'
import { StatsSection } from '@/components/StatsSection'
import { ROICalculator } from '@/components/ROICalculator'
import { ServicesSection } from '@/components/ServicesSection'
import { ClientsSection } from '@/components/ClientsSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import { stats } from '@/lib/data'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection stats={stats} />
      <ROICalculator />
      <ServicesSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
