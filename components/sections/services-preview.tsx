'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Palette, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, SlideIn } from '@/components/animations/fade-in';

const services = [
  {
    title: 'Web Design',
    description: 'Beautiful, responsive websites that engage and convert your audience.',
    icon: Palette,
    color: 'text-primary',
  },
  {
    title: 'Development',
    description: 'Robust, scalable applications built with modern technologies.',
    icon: Code,
    color: 'text-secondary',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
    icon: Smartphone,
    color: 'text-accent',
  },
];

export function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <SlideIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </SlideIn>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href="/services">
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group bg-card hover:border-primary/50">
                  <div
                    className={`h-12 w-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                  <div className="mt-4 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more →
                  </div>
                </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/services" className="text-primary hover:text-primary/80 font-semibold">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
