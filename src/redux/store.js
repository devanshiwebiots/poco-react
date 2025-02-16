// import { createStore, applyMiddleware, compose } from "redux";
// // middlewares
// import thunkMiddleware from "redux-thunk";
// // Import custom components
// import reducers from "../redux/index";

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunkMiddleware),

//     //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
//     window.devToolsExtension
//       ? window.devToolsExtension()
//       : function (f) {
//           return f;
//         }
//   )
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import customizerReducer from "./customizer/CustomizerSlice";
import wishlistReducer from "./wishlist/WishlistSlice";
import todoSliceReducer from "./todo/TodoSlice";
import productSliceReducer from "./product/ProductSlice";
import filterSliceReducer from "./filter/FilterSlice";
import cartSliceReducer from "./cart/CartSlice";
import emailSliceReducer from "./email-app/EmailSlice";
import chatSliceReducer from "./chat-app/ChatSlice";

export const store = configureStore({
  reducer: {
    wishlistSlice: wishlistReducer,
    customizerReducer: customizerReducer,
    todoSlice: todoSliceReducer,
    productSlice: productSliceReducer,
    filterSlice: filterSliceReducer,
    cartSlice: cartSliceReducer,
    emailSlice: emailSliceReducer,
    chatSlice: chatSliceReducer
  },
});



