import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  sku: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => set((state) => {
        const existing = state.items.find(i => i.productId === product.productId);
        if (existing) {
          return {
            items: state.items.map(i => 
              i.productId === product.productId 
                ? { ...i, quantity: i.quantity + 1 } 
                : i
            )
          };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'eco-sphere-cart' }
  )
);
