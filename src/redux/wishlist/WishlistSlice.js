import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    ADD_TO_WISHLIST: (state, action) => {
      const product = action.payload;
      const existingIndex = state.list.findIndex((item) => item.product.id === product.product.id);
      if (existingIndex === -1) {
        state.list.push(product);
      }
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      state.list = state.list.filter((item) => item.product.id !== action.payload.id);
    },
  },
});

export const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = wishlistSlice.actions;
export default wishlistSlice.reducer;
