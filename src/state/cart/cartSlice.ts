import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [], totalPrice: 0 };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return { items: [], totalPrice: 0 };
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
      
      state.totalPrice += price * quantity;

      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const idToRemove = action.payload.id;
      const removedItem = state.items.find(item => item.id === idToRemove);

      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.quantity;
        state.items = state.items.filter((item) => item.id !== idToRemove);
      }

      localStorage.setItem("cartState", JSON.stringify(state));
    },
    updateQuantity: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);

      if (itemToUpdate) {
        state.totalPrice += (quantity - itemToUpdate.quantity) * itemToUpdate.price;
        itemToUpdate.quantity = quantity;
      }

      localStorage.setItem("cartState", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
