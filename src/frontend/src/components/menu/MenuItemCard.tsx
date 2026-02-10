import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { MenuItem } from '@/data/menu';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const addItem = useCart((state) => state.addItem);

  const spiceLevelEmoji = {
    mild: '🌶️',
    medium: '🌶️🌶️',
    hot: '🌶️🌶️🌶️'
  };

  const handleAddToCart = () => {
    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold leading-tight">
            {item.name}
          </CardTitle>
          <Badge variant={item.isVeg ? 'secondary' : 'destructive'} className="shrink-0">
            {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-primary">₹{item.price}</span>
          {item.spiceLevel && (
            <span className="text-sm" title={`Spice level: ${item.spiceLevel}`}>
              {spiceLevelEmoji[item.spiceLevel]}
            </span>
          )}
        </div>
        <Button 
          onClick={handleAddToCart}
          size="sm" 
          className="w-full gap-2"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
