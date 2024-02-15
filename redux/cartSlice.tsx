import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    cart: any[];
    total: number;
}

const initialState: CartState = {
    cart: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<any>) {
            state.cart = [action.payload, ...state.cart];
            state.total = state.cart.length;
        },
        emptyCart(state) {
            state.cart = [];
            state.total = 0;
        }, 
    },
});

export const { addToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;