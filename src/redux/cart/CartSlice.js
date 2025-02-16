// /* eslint-disable import/no-anonymous-default-export */
// import { ADD_TO_CART, DECREMENT_QTY, REMOVE_FROM_CART } from "../actionType";

// import Products from "../../data/ecommerce/productData";

// const INIT_STATE = {
//   productItems: Products,
//   products: Products,
//   cart: [],
// };
// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const productId = action.payload.product.id;
//       if (state.cart.findIndex((product) => product.id === productId) !== -1) {
//         const cart = state.cart.reduce((cartAcc, product) => {
//           if (product.id === productId) {
//             cartAcc.push({
//               ...product,
//               qty: product.qty + 1,
//               sum: product.price * (product.qty + 1),
//             }); // Increment qty
//           } else {
//             cartAcc.push(product);
//           }
//           return cartAcc;
//         }, []);

//         return { ...state, cart };
//       }

//       return {
//         ...state,
//         cart: [
//           ...state.cart,
//           {
//             ...action.payload.product,
//             qty: action.payload.qty,
//             sum: action.payload.product.price * action.payload.qty,
//           },
//         ],
//       };

//     case DECREMENT_QTY:
//       if (
//         state.cart.findIndex((product) => product.id === action.productId) !==
//         -1
//       ) {
//         const cart = state.cart.reduce((cartAcc, product) => {
//           if (product.id === action.productId && product.qty > 1) {
//             cartAcc.push({
//               ...product,
//               qty: product.qty - 1,
//               sum: product.price * (product.qty - 1),
//             }); // Decrement qty
//           } else {
//             cartAcc.push(product);
//           }
//           return cartAcc;
//         }, []);

//         return { ...state, cart };
//       }

//       return {
//         ...state,
//         cart: [
//           ...state.cart,
//           {
//             ...action.product,
//             qty: action.qty,
//             sum: action.product.price * action.qty,
//           },
//         ],
//       };

//     case REMOVE_FROM_CART:
//       return {
//         cart: state.cart.filter((item) => item.id !== action.product_id.id),
//       };

//     default:
//       return state;
//   }
// };
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