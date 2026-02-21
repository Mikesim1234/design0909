'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FadeIn, SlideIn } from '@/components/animations/fade-in';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'Full-stack e-commerce solution with payment integration',
    image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase'],
    description: 'Secure banking app with real-time transactions',
    image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    tags: ['Figma', 'Analytics'],
    description: 'Comprehensive analytics dashboard for data visualization',
    image: 'bg-gradient-to-br from-accent/30 to-primary/30',
  },
  {
    id: 4,
    title: 'Brand Identity',
    category: 'Branding',
    tags: ['Logo', 'Guidelines'],
    description: 'Complete brand identity and design system',
    image: 'bg-gradient-to-br from-muted to-secondary/20',
  },
];

export function PortfolioPreview() {
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
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SlideIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Showcase of our latest and greatest work
            </p>
          </div>
        </SlideIn>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
            <Link key={item.id} href={`/portfolio/${item.id}`}>
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 cursor-pointer group bg-card">
                <div className={`h-48 ${item.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/60">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
