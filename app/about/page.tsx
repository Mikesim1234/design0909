'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const team = [
  {
    name: 'Alex Morgan',
    role: 'Creative Director',
    expertise: ['Design', 'Branding', 'Strategy'],
    bio: 'Passionate about creating beautiful digital experiences with 10+ years of design expertise.',
  },
  {
    name: 'Jordan Smith',
    role: 'Lead Developer',
    expertise: ['React', 'Node.js', 'Architecture'],
    bio: 'Full-stack developer focused on scalable, performant applications.',
  },
  {
    name: 'Casey Lee',
    role: 'Product Manager',
    expertise: ['Product', 'UX Research', 'Analytics'],
    bio: 'Data-driven strategist who ensures every product delivers real value.',
  },
  {
    name: 'Taylor Johnson',
    role: 'Lead Designer',
    expertise: ['UI/UX', 'Figma', 'Prototyping'],
    bio: 'User-centered designer creating intuitive and delightful interfaces.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Design 0909</h1>
            <p className="text-xl text-foreground/70">
              We are a team of creative minds dedicated to building digital products that matter.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                  Design 0909 was founded in 2015 by a group of designers and developers who
                  believed that great digital products come from collaboration, creativity, and
                  a deep understanding of user needs.
                </p>
                <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                  Over the years, we've had the privilege of working with startups and
                  established companies alike, helping them transform their visions into
                  successful digital products that delight users.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Today, we continue to push the boundaries of what's possible in digital
                  design and development, always staying true to our core values of quality,
                  innovation, and customer success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-foreground/40">
                  <p className="text-lg">Our office &amp; team space</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence',
                  description:
                    'We strive for excellence in every project, paying attention to details and delivering quality.',
                },
                {
                  title: 'Innovation',
                  description:
                    'We embrace new technologies and creative solutions to solve complex problems.',
                },
                {
                  title: 'Integrity',
                  description:
                    'We believe in honest communication, transparency, and long-term relationships.',
                },
              ].map((value, index) => (
                <Card key={index} className="p-8 text-center bg-card">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-foreground/40">
                      <p>Photo</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-foreground/70 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Years in Business', value: '9+' },
                { label: 'Projects Completed', value: '150+' },
                { label: 'Team Members', value: '50+' },
                { label: 'Happy Clients', value: '95%' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-foreground/70">{stat.label}</p>
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
