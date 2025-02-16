// /* eslint-disable import/no-anonymous-default-export */
// import { GET_ALL_PRODUCT, GET_LIST, GET_SINGLE_ITEM } from "../actionType";

// import Products from "../../data/ecommerce/productData";

// const INIT_STATE = {
//   productItems: Products,
//   products: Products,
//   symbol: "$",
//   singleItem: [],
//   list: [],
// };

// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case GET_ALL_PRODUCT:
//       return { ...state };

//     case GET_LIST:
//       return { ...state, productItems: Products };

//     case GET_SINGLE_ITEM:
//       const selectedItem = state.productItems;
//       return { ...state, singleItem: selectedItem[0] };

//     default:
//       return state;
//   }
// };

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