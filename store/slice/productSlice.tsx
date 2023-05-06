import { createSlice } from '@reduxjs/toolkit';

type ProductState = {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.status = 'loading';
    },
    fetchProductsSuccess: (state, action) => {
      state.status = 'idle';
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;