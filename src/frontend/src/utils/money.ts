export function formatINR(amount: number): string {
  return `₹${amount.toFixed(0)}`;
}

export function convertToBackendAmount(amount: number): bigint {
  return BigInt(Math.round(amount));
}
