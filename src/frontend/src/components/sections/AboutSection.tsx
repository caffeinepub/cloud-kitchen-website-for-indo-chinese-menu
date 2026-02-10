import { Card, CardContent } from '@/components/ui/card';
import { Flame, Clock, Heart, Award } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Flame,
      title: 'Authentic Fusion',
      description: 'Perfect blend of Indian spices and Chinese cooking techniques'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All dishes prepared fresh with premium ingredients'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish crafted with passion and attention to detail'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Committed to delivering the best taste and experience'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            About Wok & Roll
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            We bring you the finest Indo-Chinese cuisine, combining the bold flavors of Indian spices 
            with traditional Chinese cooking methods. Our cloud kitchen ensures fresh, hot meals 
            delivered straight to your door.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 transition-all hover:shadow-warm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
