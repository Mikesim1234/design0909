'use client';

import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Let's discuss your next project and see how we can help bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Schedule a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
          >
            Send us an Email
          </Button>
        </div>
      </div>
    </section>
  );
}
