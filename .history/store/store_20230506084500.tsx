import { configureStore } from '@reduxjs/toolkit'
import {product}
// ...

export const store = configureStore({
  reducer: {
    adminAuthToggle: adminAuthReducer,
    userAuthToggle: userAuthReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch