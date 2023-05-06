import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
  phone: string;
  address: string;
  isLoggedIn: boolean;
};

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LogIn: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      user.isLoggedIn = true;
      state.user = user;
    },
    Logout: (state) => {
      if (state.user) {
        state.user.isLoggedIn = false;
        state.user = null;
      }
    },
  },
});

export const { LogIn, Logout } = userSlice.actions;

export default userSlice.reducer;
