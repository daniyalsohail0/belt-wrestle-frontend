import { configureStore } from "@reduxjs/toolkit";
import cookieSlice from "./cookies/cookieSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cookies: cookieSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
