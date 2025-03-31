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