import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginUserSlice from "./loginUserSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    user: loginUserSlice,
  },
});
export default appStore;
