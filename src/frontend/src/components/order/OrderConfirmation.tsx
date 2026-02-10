import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface OrderConfirmationProps {
  orderId: string;
  timestamp: string;
  onClose: () => void;
}

export function OrderConfirmation({ orderId, timestamp, onClose }: OrderConfirmationProps) {
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <DialogTitle className="text-center text-2xl">Order Confirmed!</DialogTitle>
        <DialogDescription className="text-center">
          Your order has been successfully placed
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 rounded-lg border bg-muted/50 p-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Order ID</p>
          <p className="font-mono font-semibold">{orderId}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Order Time</p>
          <p className="font-medium">{formattedDate}</p>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        You can view your order details in the "My Orders" section
      </p>

      <Button onClick={onClose} className="w-full">
        Done
      </Button>
    </div>
  );
}
