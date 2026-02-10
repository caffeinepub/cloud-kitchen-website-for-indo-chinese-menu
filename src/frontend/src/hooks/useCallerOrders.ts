import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Order } from '@/backend';

export function useCallerOrders() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Order[]>({
    queryKey: ['callerOrders'],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.getCallerOrders();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}
