'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind? Let's talk about it. We're always excited to hear about new opportunities.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@design0909.com',
                  href: 'mailto:hello@design0909.com',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  href: 'tel:+15551234567',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: '123 Design Street, NYC 10001',
                  href: '#',
                },
              ].map((info, index) => {
                const Icon = info.icon;
                return (
                  <a key={index} href={info.href} className="block">
                    <Card className="p-8 text-center bg-card hover:shadow-lg transition-all cursor-pointer group">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                      <p className="text-foreground/70 group-hover:text-primary transition-colors">
                        {info.content}
                      </p>
                    </Card>
                  </a>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                  </Button>

                  {submitted && (
                    <div className="p-4 bg-accent/10 text-accent rounded-lg text-center">
                      Thank you! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Why Work With Us</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Expert Team',
                      description:
                        'We have 50+ skilled professionals with diverse expertise across design, development, and strategy.',
                    },
                    {
                      title: 'Proven Track Record',
                      description:
                        'Over 150+ successful projects delivered for clients ranging from startups to Fortune 500 companies.',
                    },
                    {
                      title: 'Custom Solutions',
                      description:
                        'We don\'t believe in one-size-fits-all. Every solution is tailored to your specific needs.',
                    },
                    {
                      title: 'Ongoing Support',
                      description:
                        'Our partnership doesn\'t end at launch. We provide continuous support and optimization.',
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: '#' },
                      { icon: Github, href: '#' },
                      { icon: Twitter, href: '#' },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
