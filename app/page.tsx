'use client';

import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { PortfolioPreview } from '@/components/sections/portfolio-preview';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ServicesPreview />
        <PortfolioPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
