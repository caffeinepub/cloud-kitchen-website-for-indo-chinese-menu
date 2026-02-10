import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { MenuSection } from './components/menu/MenuSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { MyOrdersSection } from './components/orders/MyOrdersSection';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <ContactSection />
        <MyOrdersSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

export default App;
