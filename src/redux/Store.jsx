import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import HomeSlice from "./Slice/HomeSlice";

const Store = configureStore({
  reducer: {
    home: HomeSlice,
    cartItems: cartSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
export default Store;
