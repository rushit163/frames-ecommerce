import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from './slice/auth/adminAuthSlice'
import userAuthReducer from './slice/auth/userAuthSlice'
// ...

export const store = configureStore({
  reducer: {
    adminAuthToggle: adminAuthReducer,
    userAuthToggle: userAuthReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch