import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';
import { useCreateOrder } from '@/hooks/useCreateOrder';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { formatINR } from '@/utils/money';
import { saveOrderMetadata } from '@/utils/orderMeta';
import { OrderConfirmation } from './OrderConfirmation';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutDialog({ open, onOpenChange }: CheckoutDialogProps) {
  const { items, getSubtotal } = useCart();
  const { identity } = useInternetIdentity();
  const createOrder = useCreateOrder();

  const [orderType, setOrderType] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [confirmedTimestamp, setConfirmedTimestamp] = useState<string | null>(null);

  const subtotal = getSubtotal();
  const isAuthenticated = !!identity;

  const isFormValid = () => {
    if (!customerName.trim() || !phone.trim()) return false;
    if (orderType === 'Delivery' && !address.trim()) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    try {
      const result = await createOrder.mutateAsync({
        orderType,
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: orderType === 'Delivery' ? address.trim() : undefined,
        instructions: instructions.trim() || undefined,
      });

      const timestamp = new Date().toISOString();
      saveOrderMetadata(result.orderId, { createdAt: timestamp });
      
      setConfirmedOrderId(result.orderId);
      setConfirmedTimestamp(timestamp);
    } catch (error) {
      console.error('Order creation failed:', error);
    }
  };

  const handleClose = () => {
    if (!createOrder.isPending) {
      setOrderType('Pickup');
      setCustomerName('');
      setPhone('');
      setAddress('');
      setInstructions('');
      setConfirmedOrderId(null);
      setConfirmedTimestamp(null);
      createOrder.reset();
      onOpenChange(false);
    }
  };

  if (confirmedOrderId && confirmedTimestamp) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <OrderConfirmation
            orderId={confirmedOrderId}
            timestamp={confirmedTimestamp}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            Complete your order details below
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please log in to place an order
            </AlertDescription>
          </Alert>
        )}

        {/* Order Summary */}
        <div className="space-y-3">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="rounded-lg border p-4 space-y-2">
            {items.map((item) => (
              <div key={item.menuItem.id} className="flex justify-between text-sm">
                <span>
                  {item.menuItem.name} x{item.quantity}
                </span>
                <span className="font-medium">
                  {formatINR(item.menuItem.price * item.quantity)}
                </span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderType">Order Type *</Label>
            <Select
              value={orderType}
              onValueChange={(value) => setOrderType(value as 'Pickup' | 'Delivery')}
              disabled={!isAuthenticated}
            >
              <SelectTrigger id="orderType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pickup">Pickup</SelectItem>
                <SelectItem value="Delivery">Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customerName">Name *</Label>
            <Input
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your name"
              required
              disabled={!isAuthenticated}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              required
              disabled={!isAuthenticated}
            />
          </div>

          {orderType === 'Delivery' && (
            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                required
                rows={3}
                disabled={!isAuthenticated}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="instructions">Special Instructions (Optional)</Label>
            <Textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Any special requests or dietary requirements"
              rows={2}
              disabled={!isAuthenticated}
            />
          </div>

          {createOrder.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {createOrder.error instanceof Error
                  ? createOrder.error.message
                  : 'Failed to create order. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={createOrder.isPending}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isAuthenticated || !isFormValid() || createOrder.isPending}
              className="flex-1"
            >
              {createOrder.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Placing Order...
                </>
              ) : (
                'Place Order'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
