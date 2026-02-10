interface OrderMetadata {
  createdAt: string;
}

const STORAGE_KEY = 'wok-and-roll-order-meta';

function getOrderMetaStore(): Record<string, OrderMetadata> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveOrderMetaStore(store: Record<string, OrderMetadata>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (error) {
    console.error('Failed to save order metadata:', error);
  }
}

export function saveOrderMetadata(orderId: string, metadata: OrderMetadata): void {
  const store = getOrderMetaStore();
  store[orderId] = metadata;
  saveOrderMetaStore(store);
}

export function getOrderMetadata(orderId: string): OrderMetadata | null {
  const store = getOrderMetaStore();
  return store[orderId] || null;
}
