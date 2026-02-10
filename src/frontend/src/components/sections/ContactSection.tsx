import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '@/config/business';

export function ContactSection() {
  return (
    <section id="contact" className="border-t bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to order? Reach out to us and enjoy delicious Indo-Chinese food delivered to your doorstep.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Call us to place your order</p>
              <p className="mt-2 font-medium">{businessInfo.contact.phone}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Service Area</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">We deliver to</p>
              <p className="mt-2 font-medium">{businessInfo.contact.serviceArea}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Weekdays</p>
              <p className="font-medium">{businessInfo.hours.weekdays}</p>
              <p className="mt-2 text-sm text-muted-foreground">Weekends</p>
              <p className="font-medium">{businessInfo.hours.weekends}</p>
              <p className="mt-2 text-xs text-primary">{businessInfo.hours.note}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
