import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useCallerOrders } from '@/hooks/useCallerOrders';
import { LoginButton } from '@/components/auth/LoginButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, ShoppingBag, AlertCircle } from 'lucide-react';
import { formatINR } from '@/utils/money';
import { getOrderMetadata } from '@/utils/orderMeta';

export function MyOrdersSection() {
  const { identity } = useInternetIdentity();
  const { data: orders, isLoading, isError, error } = useCallerOrders();

  const isAuthenticated = !!identity;

  if (!isAuthenticated) {
    return (
      <section id="my-orders" className="py-16 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              My Orders
            </h2>
            <p className="text-muted-foreground">
              Please log in to view your order history
            </p>
            <div className="flex justify-center">
              <LoginButton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="my-orders" className="py-16 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              My Orders
            </h2>
            <p className="text-muted-foreground">
              View your order history and track your orders
            </p>
          </div>

          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error instanceof Error ? error.message : 'Failed to load orders'}
              </AlertDescription>
            </Alert>
          )}

          {!isLoading && !isError && orders && orders.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">No orders yet</h3>
                <p className="text-sm text-muted-foreground">
                  Start ordering from our menu to see your orders here
                </p>
              </CardContent>
            </Card>
          )}

          {!isLoading && !isError && orders && orders.length > 0 && (
            <div className="space-y-4">
              {orders.map((order) => {
                const metadata = getOrderMetadata(order.id.toString());
                const orderDate = metadata?.createdAt
                  ? new Date(metadata.createdAt).toLocaleString('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })
                  : 'N/A';

                return (
                  <Card key={order.id.toString()}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">
                            Order #{order.id.toString()}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{orderDate}</p>
                        </div>
                        <Badge>Placed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Items</h4>
                        <ul className="space-y-1">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-sm font-medium">
                          {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {formatINR(Number(order.total))}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
