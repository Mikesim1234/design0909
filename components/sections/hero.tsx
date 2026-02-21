'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/animations/fade-in';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 px-4">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SlideIn direction="down" delay={0.2}>
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              Welcome to Design 0909
            </span>
          </div>
        </SlideIn>

        <SlideIn direction="up" delay={0.3}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Create</span>{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
        </SlideIn>

        <FadeIn delay={0.4}>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            We craft beautiful, functional digital solutions that transform your vision into reality.
            From concept to launch, we deliver excellence.
          </p>
        </FadeIn>

        <SlideIn direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View Our Work
            </Button>
          </div>
        </SlideIn>

        {/* Stats */}
        <SlideIn direction="up" delay={0.6}>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto pt-16 border-t border-border">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-3xl font-bold text-primary">150+</p>
              <p className="text-sm text-foreground/60 mt-1">Projects Completed</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-3xl font-bold text-secondary">95%</p>
              <p className="text-sm text-foreground/60 mt-1">Client Satisfaction</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-3xl font-bold text-accent">50+</p>
              <p className="text-sm text-foreground/60 mt-1">Team Members</p>
            </motion.div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
