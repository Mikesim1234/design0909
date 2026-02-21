'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { SlideIn } from '@/components/animations/fade-in';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content:
      'Design 0909 transformed our vision into reality. Their team is professional, creative, and delivered beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Digital Solutions',
    content:
      'Outstanding work on our e-commerce platform. The attention to detail and timely delivery impressed us completely.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Growth Co',
    content:
      'Their design philosophy aligns perfectly with our brand. The mobile app they created has increased our engagement by 40%.',
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-foreground/60">Trusted by businesses around the world</p>
          </div>
        </SlideIn>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
