import { createSlice } from "@reduxjs/toolkit";

interface CartToggleState {
  isOpen: boolean;
}

const initialState: CartToggleState = {
  isOpen: false
};

const cartToggleSlice = createSlice({
  name: "cartToggleState",
  initialState,
  reducers: {
    // openCart: (state) => {
    //   state.isOpen = true;
    //   console.log(`opened`)
    // },
    // closeCart: (state) => {
    //   state.isOpen = false;
    //   console.log(`closed`)
    // },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    }
  },
});

export const { toggleCart } = cartToggleSlice.actions;

export default cartToggleSlice.reducer;
