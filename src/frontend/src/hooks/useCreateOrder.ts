import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useCart } from './useCart';
import { convertToBackendAmount } from '@/utils/money';

interface CreateOrderInput {
  orderType: 'Pickup' | 'Delivery';
  customerName: string;
  phone: string;
  address?: string;
  instructions?: string;
}

export function useCreateOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const { items, clearCart } = useCart();

  return useMutation({
    mutationFn: async (input: CreateOrderInput) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      // Format items for backend (simplified as array of strings)
      const itemStrings = items.map(
        (item) => `${item.menuItem.name} x${item.quantity}`
      );

      // Calculate total
      const total = items.reduce(
        (sum, item) => sum + item.menuItem.price * item.quantity,
        0
      );

      // Create order
      const orderId = await actor.createOrder(
        itemStrings,
        convertToBackendAmount(total)
      );

      return {
        orderId: orderId.toString(),
        total,
        items: items.map((item) => ({
          name: item.menuItem.name,
          quantity: item.quantity,
          price: item.menuItem.price,
        })),
      };
    },
    onSuccess: () => {
      clearCart();
      queryClient.invalidateQueries({ queryKey: ['callerOrders'] });
    },
  });
}
