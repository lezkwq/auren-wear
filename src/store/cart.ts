import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartLine {
  id: string;
  productSlug: string;
  name: string;
  price: number;
  size: string;
  color: string;
  imageVariant: string;
  quantity: number;
}

interface CartState {
  items: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (line: Omit<CartLine, 'quantity'>) => void;
  remove: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (line) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === line.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === line.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { ...line, quantity: 1 }],
            isOpen: true,
          };
        }),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: 'auren-cart' }
  )
);

export function useCartTotal() {
  const items = useCart((s) => s.items);
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function useCartCount() {
  const items = useCart((s) => s.items);
  return items.reduce((sum, i) => sum + i.quantity, 0);
}
