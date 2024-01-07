import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducures";
export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
  devtools: true,
});
