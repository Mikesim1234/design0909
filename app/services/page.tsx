'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Brand Identity',
    description: 'Complete branding solutions that reflect your vision',
    features: [
      'Logo Design',
      'Color Palette',
      'Typography',
      'Brand Guidelines',
      'Marketing Collateral',
      'Package Design',
    ],
  },
  {
    title: 'Digital Branding',
    description: 'Strategic brand positioning and digital presence development',
    features: [
      'Brand Strategy',
      'Visual Identity',
      'Social Media Branding',
      'Brand Voice & Messaging',
      'Digital Assets',
      'Brand Consistency',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategies to grow your online presence and reach',
    features: [
      'SEO Strategy',
      'Social Media Marketing',
      'Content Marketing',
      'Email Campaigns',
      'Paid Advertising',
      'Analytics & Reporting',
    ],
  },
  {
    title: 'Consulting & Strategy',
    description: 'Expert guidance for your digital transformation journey',
    features: [
      'Digital Strategy',
      'Technology Audit',
      'Process Optimization',
      'Team Training',
      'Roadmap Planning',
      'Best Practices',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your specific needs and goals
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((service, index) => (
                <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={`${index}-${featureIndex}`} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Discovery', description: 'We understand your goals and challenges' },
                { step: '2', title: 'Strategy', description: 'We develop a comprehensive plan' },
                { step: '3', title: 'Execution', description: 'We bring your vision to life' },
                { step: '4', title: 'Support', description: 'We provide ongoing support' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
