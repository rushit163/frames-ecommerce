import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

// Define a type for the slice state
interface ToggleComponent {
  isComponentOn: boolean; 
}

// Define the initial state using that type
const initialState: ToggleComponent = {
  isComponentOn: false,
}

export const userAuthSlice = createSlice({
  name: 'toggleComponent',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleComponent: (state) => {
      state.isComponentOn = !state.isComponentOn;
    },
  },
})

export const { toggleComponent } = userAuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const toggle = (state: RootState) => state.counter.value

export default userAuthSlice.reducer