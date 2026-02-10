import { Button } from '@/components/ui/button';
import { businessInfo } from '@/config/business';

export function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      <div className="container relative">
        <div className="grid gap-8 py-12 md:grid-cols-2 md:py-20 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {businessInfo.name}
              </h1>
              <p className="text-xl font-medium text-primary md:text-2xl">
                {businessInfo.tagline}
              </p>
              <p className="text-lg text-muted-foreground text-balance">
                {businessInfo.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={scrollToMenu} className="text-base shadow-warm">
                View Menu
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToMenu}>
                Order Now
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span>Authentic Flavors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Quick Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <span>Fresh Ingredients</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/generated/cloud-kitchen-hero.dim_1600x900.png"
                alt="Delicious Indo-Chinese cuisine"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
