import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incrmenet: state => { return parseInt(state) + 1 },
        decrement: state => { return parseInt(state) - 1 },
    }
})

export default counter.reducer;
export const { incrmenet, decrement } = counter.actions;