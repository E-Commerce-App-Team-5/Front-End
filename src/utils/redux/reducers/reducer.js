import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false,
};

const sliceState = createSlice({
    name: "state",
    initialState: initialState,
    reducers: {
        handleAuth : (state, action) => {
            state.isLoggedin = action.payload;
        },
        handleUser: (state, action) => {
            state.Users = action.payload;
        },
        addToCart: (state, action) => {
            state.Cart = action.payload;
        },
    },
});

const reducer = {
    state: sliceState.reducer,
};

export const { handleAuth, handleUser, addToCart } = sliceState.actions;
export default reducer;