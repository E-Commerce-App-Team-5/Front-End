import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false,
};

const sliceState = createSlice ({
    name: "state",
    initialState: initialState,
    reducer: {
        handleAuth : (state, action) => {
            state.isLoggedin = action.payload;
        },
        handleUser: (state, action) => {
            state.Users = action.payload;
        },
    },
});

const reducer = {
    state: sliceState.reducer,
};

export const { handleAuth, handleUser } = sliceState.actions;
export default reducer;