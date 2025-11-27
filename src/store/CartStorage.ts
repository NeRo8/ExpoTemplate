import { create } from 'zustand';

import { Product, products } from '@constants/temp/product';

export type CartOrderType = 'rent' | 'buy';

export type CartItem = {
  product: Product;
  quantity: number;
  type: CartOrderType;
};

type CartStorageState = {
  cart: CartItem[];
};

type CartStorageActions = {
  addProductToCart: (product: Product, type: CartOrderType) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  updateProductType: (productId: string, type: CartOrderType) => void;
  removeProductFromCart: (productId: string) => void;
  clearCart: () => void;
};

type CartStorage = CartStorageState & CartStorageActions;

const initialState: CartStorageState = {
  cart: [
    {
      product: products[0],
      quantity: 1,
      type: 'rent',
    },
    {
      product: products[1],
      quantity: 2,
      type: 'buy',
    },
    {
      product: products[2],
      quantity: 3,
      type: 'rent',
    },
    {
      product: products[3],
      quantity: 1,
      type: 'buy',
    },
  ],
};

export const useCartStorage = create<CartStorage>((set) => ({
  ...initialState,
  addProductToCart: (product: Product, type: CartOrderType) => {
    set((state) => ({
      cart: [...state.cart, { product, quantity: 1, type }],
    }));
  },
  updateProductQuantity: (productId: string, quantity: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  updateProductType: (productId: string, type: CartOrderType) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, type } : item
      ),
    }));
  },
  removeProductFromCart: (productId: string) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
  },
  clearCart: () => {
    set({ ...initialState });
  },
}));

export const useCartSelector = () => {
  return useCartStorage((state) => state.cart);
};

export const useCartTotalSelector = () => {
  return useCartStorage((state) =>
    state.cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  );
};

export const useAddProductToCartAction = () => {
  return useCartStorage((state) => state.addProductToCart);
};

export const useUpdateProductQuantityAction = () => {
  return useCartStorage((state) => state.updateProductQuantity);
};

export const useUpdateProductTypeAction = () => {
  return useCartStorage((state) => state.updateProductType);
};

export const useRemoveProductFromCartAction = () => {
  return useCartStorage((state) => state.removeProductFromCart);
};

export const useClearCartAction = () => {
  return useCartStorage((state) => state.clearCart);
};
