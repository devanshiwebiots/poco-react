import { createSlice } from "@reduxjs/toolkit";
import Products from "../../data/ecommerce/productData";

const initialState = {
  productItems: Products,
  products: Products,
  symbol: "$",
  singleItem: [],
  list: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GET_ALL_PRODUCT: (state) => {
      return state;
    },
    GET_LIST: (state) => {
      state.productItems = Products;
    },
    GET_SINGLE_ITEM: (state) => {
      state.singleItem = state.productItems[0];
    },
  },
});

export const { GET_ALL_PRODUCT, GET_LIST, GET_SINGLE_ITEM } = productSlice.actions;
export default productSlice.reducer;