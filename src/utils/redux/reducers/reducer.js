import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const sliceState = createSlice ({
    name: "state",
    initialState: initialState,
    reducer: {
        handleAuth : (state, action) => {

        },
    },
});

const reducer = {
    state: sliceState.reducer,
};

export const { handleAuth } = sliceState.actions;
export default reducer;

