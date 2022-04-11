import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// payload = fruitI
			const fruitId = action.payload;
			if (fruitId in state) {
				state[fruitId] = state[fruitId] + 1;
			} else {
				state[fruitId] = 1;
			}
		},
		increaseItem: (state, action) => {
			// payload = fruitId
			const fruitId = action.payload;
			if (fruitId in state) {
				state[fruitId] = state[fruitId] + 1;
			}
		},
		// Decreases the item count by 1, if itemCount === 1 then deletes the item from list
		decreaseItem: (state, action) => {
			// payload = fruitId
			const fruitId = action.payload;
			if (fruitId in state) {
				if (state[fruitId] < 2) {
					delete state[fruitId];
				} else {
					state[fruitId] = state[fruitId] - 1;
				}
			}
		},
		resetCart: (state, action) => {
			return {};
		},
	},
});

export const { addToCart, increaseItem, decreaseItem, resetCart } =
	cartSlice.actions;

export default cartSlice.reducer;
