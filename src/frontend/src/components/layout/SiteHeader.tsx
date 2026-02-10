import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartButton } from '@/components/order/CartButton';
import { LoginButton } from '@/components/auth/LoginButton';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/cloud-kitchen-logo.dim_512x512.png"
            alt="Wok & Roll Logo"
            className="h-10 w-10 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-primary">Wok & Roll</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Indo-Chinese Fusion</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('my-orders')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            My Orders
          </button>
          <div className="flex items-center gap-2">
            <LoginButton />
            <CartButton />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LoginButton />
          <CartButton />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('my-orders')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              My Orders
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
