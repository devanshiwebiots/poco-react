import { createSlice } from "@reduxjs/toolkit";
import Products from "../../data/ecommerce/productData";

const initialState = {
  productItems: Products,
  products: Products,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const productId = action.payload.product.id;
      const existingProduct = state.cart.find((product) => product.id === productId);

      if (existingProduct) {
        state.cart = state.cart.map((product) => (product.id === productId ? { ...product, qty: product.qty + 1, sum: product.price * (product.qty + 1) } : product));
      } else {
        state.cart.push({
          ...action.payload.product,
          qty: action.payload.qty,
          sum: action.payload.product.price * action.payload.qty,
        });
      }
    },
    DECREMENT_QTY: (state, action) => {
      state.cart = state.cart.map((product) => (product.id === action.payload && product.qty > 1 ? { ...product, qty: product.qty - 1, sum: product.price * (product.qty - 1) } : product));
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { ADD_TO_CART, DECREMENT_QTY, REMOVE_FROM_CART } = cartSlice.actions;
export default cartSlice.reducer;