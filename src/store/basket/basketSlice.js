import { createSlice } from "@reduxjs/toolkit";

const initState = {
    panda: 0,
    eagle: 0,
    gorilla: 0,
    elephant: 0,
    crocodile: 0,
    lemur: 0,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {...initState},
    reducers: {
        addToBasket(state, {payload}) {
            return {...state, ...payload};
        },
        removeFromBasket(state, {payload}) {
            return { ...state, [payload]: 0 };
        }, 
        clearBasket() {
            return {};
        }
    }
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;