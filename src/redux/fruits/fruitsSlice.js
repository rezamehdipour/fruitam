import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fruitsSlice = createSlice({
	name: 'fruits',
	initialState,
	reducers: {
		setFruits: (state, action) => {
			return action.payload;
		},
	}
})

export const { setFruits } = fruitsSlice.actions;

export default fruitsSlice.reducer;