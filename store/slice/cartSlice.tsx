import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  items: {
    productId: number;
    quantity: number;
  }[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const existingItem = state.items.find((item) => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const index = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > action.payload.quantity) {
          item.quantity -= action.payload.quantity;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;