import { configureStore } from "@reduxjs/toolkit";

// Slices
import fruitsSlice from "./fruits/fruitsSlice";
import cartSlice from "./cart/cartSlice";
import cartStatusSlice from "./cart/cartStatusSlice";

export default configureStore({
	reducer: {
		fruits: fruitsSlice,
		cart: cartSlice,
		cartStatus: cartStatusSlice,
	},
});
