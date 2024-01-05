import { createSlice } from "@reduxjs/toolkit";

interface CookieState {
  accepted: boolean;
  modalOpen: boolean;
}

const loadState = (): CookieState => {
  try {
    const serializedState = localStorage.getItem("cookieState");
    if (serializedState === null) {
      return { accepted: false, modalOpen: true };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return { accepted: false, modalOpen: true };
  }
};

const initialState: CookieState = loadState();

const cookieSlice = createSlice({
  name: "cookieState",
  initialState,
  reducers: {
    accepted: (state) => {
      state.accepted = true;
      state.modalOpen = false;
      localStorage.setItem("cookieState", JSON.stringify(state));
    },
    rejected: (state) => {
      state.accepted = false;
      state.modalOpen = false;
      localStorage.setItem("cookieState", JSON.stringify(state));
    },
  },
});

export const { accepted, rejected } = cookieSlice.actions;

export default cookieSlice.reducer;
