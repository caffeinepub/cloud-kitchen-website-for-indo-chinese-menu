import { useState } from 'react';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatINR } from '@/utils/money';
import { CheckoutDialog } from './CheckoutDialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CartSheet() {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Your cart is empty</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Add items from the menu to get started
          </p>
        </div>
      </SheetContent>
    );
  }

  return (
    <>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          <div className="space-y-4 py-4">
            {items.map((item) => (
              <div key={item.menuItem.id} className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight">
                      {item.menuItem.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formatINR(item.menuItem.price)} each
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={() => removeItem(item.menuItem.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.menuItem.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.menuItem.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-semibold">
                    {formatINR(item.menuItem.price * item.quantity)}
                  </span>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </ScrollArea>

        <SheetFooter className="flex-col gap-4">
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setCheckoutOpen(true)}
              size="lg"
              className="w-full"
            >
              Proceed to Checkout
            </Button>
            <Button
              onClick={clearCart}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Clear Cart
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>

      <CheckoutDialog
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
      />
    </>
  );
}
