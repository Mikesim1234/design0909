'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    description: 'Full-stack e-commerce solution with payment integration',
    image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    year: '2024',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Banking'],
    description: 'Secure banking app with real-time transactions',
    image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
    year: '2024',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    tags: ['Figma', 'Analytics', 'Dashboard'],
    description: 'Comprehensive analytics dashboard for data visualization',
    image: 'bg-gradient-to-br from-accent/30 to-primary/30',
    year: '2023',
  },
  {
    id: 4,
    title: 'Brand Identity',
    category: 'Branding',
    tags: ['Logo', 'Guidelines', 'Brand'],
    description: 'Complete brand identity and design system',
    image: 'bg-gradient-to-br from-muted to-secondary/20',
    year: '2023',
  },
  {
    id: 5,
    title: 'Fitness App',
    category: 'Mobile Development',
    tags: ['React Native', 'Wearables', 'Health'],
    description: 'Connected fitness app with wearable integration',
    image: 'bg-gradient-to-br from-accent/40 to-secondary/20',
    year: '2024',
  },
  {
    id: 6,
    title: 'Marketing Website',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    description: 'High-performance marketing website with SEO optimization',
    image: 'bg-gradient-to-br from-primary/40 to-accent/20',
    year: '2023',
  },
];

const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our latest projects and see what we can do for you
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border-primary text-primary hover:bg-primary/5'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 cursor-pointer group bg-card">
                    <div className={`h-48 ${item.image} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-foreground/60 mt-1">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/10 text-primary text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/60">No projects found in this category</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
