// savedItemsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SavedItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface SavedItemsState {
  items: SavedItem[];
}

const initialState: SavedItemsState = {
  items: [],
};

const savedItemsSlice = createSlice({
  name: "savedItems",
  initialState,
  reducers: {
    addSavedItem: (state, action: PayloadAction<SavedItem>) => {
      const newItem = action.payload;

      // Ensure that state.items is defined before calling find
      if (state.items) {
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (existingItem) {
          alert("Item already saved");
        } else {
          state.items.push(newItem);
        }
      }
    },
    removeSavedItem: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;

      // Ensure that state.items is defined before calling find
      if (state.items?.length) {
        state.items = state.items.filter((item) => item.id !== idToRemove);
      }
    },
    clearSavedItems: (state) => {
      state.items = [];
    },
  },
});

export const { addSavedItem, removeSavedItem, clearSavedItems } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
