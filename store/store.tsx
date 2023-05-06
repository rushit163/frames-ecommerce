import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import productReducer from './slice/productSlice'
import userReducer from './slice/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
