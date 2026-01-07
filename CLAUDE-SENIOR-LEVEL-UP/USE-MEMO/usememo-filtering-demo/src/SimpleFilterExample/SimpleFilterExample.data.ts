// Симулираме голяма колекция от данни
export const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  category: i % 3 === 0 ? 'Electronics' : i % 3 === 1 ? 'Clothing' : 'Food',
}));
