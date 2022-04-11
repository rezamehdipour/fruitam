import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const cartStatusSlice = createSlice({
	name: "cartStatus",
	initialState,
	reducers: {
		showCart: (state, action) => {
			return true;
		},
		hideCart: (state, action) => {
			return false;
		},
		toggleCart: (state, action) => {
			return !state;
		},
	},
});

export const { showCart, hideCart, toggleCart } = cartStatusSlice.actions;

export default cartStatusSlice.reducer;
