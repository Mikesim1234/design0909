'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const portfolioDetails: Record<number, any> = {
  1: {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    year: '2024',
    client: 'TechShop Inc.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    challenge:
      'Client needed a scalable e-commerce platform to handle thousands of products and concurrent users with secure payment processing.',
    solution:
      'We built a full-stack e-commerce solution using React for the frontend, Node.js for the backend, and MongoDB for data management. Integrated Stripe for secure payments and AWS for hosting.',
    results: ['3x increased sales', '99.9% uptime', '40% faster page load'],
  },
  2: {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    year: '2024',
    client: 'FinanceFlow',
    tags: ['React Native', 'Firebase', 'Banking', 'Security'],
    image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
    challenge:
      'Create a secure mobile banking app that allows users to manage their finances on-the-go with real-time transaction updates.',
    solution:
      'Developed a React Native app with Firebase backend for real-time data sync. Implemented bank-grade security with biometric authentication and encryption.',
    results: ['50K+ downloads', '4.8 star rating', 'Zero security breaches'],
  },
};

export default function PortfolioDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);
  const project = portfolioDetails[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/portfolio">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className={`py-20 px-4 ${project.image}`}>
          <div className="max-w-4xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <span className="text-lg text-foreground/70">{project.category}</span>
              <span className="text-lg text-foreground/70">•</span>
              <span className="text-lg text-foreground/70">{project.year}</span>
              <span className="text-lg text-foreground/70">•</span>
              <span className="text-lg text-foreground/70 font-semibold">{project.client}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} className="bg-primary/10 text-primary text-base px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Challenge</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.results.map((result: string, index: number) => (
                  <div key={index} className="bg-muted/50 p-6 rounded-lg text-center">
                    <p className="text-xl font-bold text-primary">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-border pt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
