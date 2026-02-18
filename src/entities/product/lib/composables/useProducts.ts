export function useProducts() {
  const priceX2 = (price: number) => Math.ceil(price / 2)
  return { priceX2 }
}
