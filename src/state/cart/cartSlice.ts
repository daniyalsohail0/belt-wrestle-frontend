import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadState = () : CartState => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return { items: [] };
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, imageUrl, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, imageUrl, quantity });
      }

      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const idToRemove = action.payload.id;

      state.items = state.items.filter((item) => item.id !== idToRemove);

      localStorage.setItem("cartState", JSON.stringify(state));
    },
    updateQuantity: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );

      state.items = updatedItems;

      localStorage.setItem("cartState", JSON.stringify(updatedItems));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
