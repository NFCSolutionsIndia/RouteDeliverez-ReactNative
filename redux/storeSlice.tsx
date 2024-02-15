import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoreState {
    Store:[],
    StoreItem:{}
}

const initialState: StoreState = {
    Store:[],
    StoreItem:{}
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addStore(state, action: PayloadAction<any>) {
            state.StoreItem = action.payload; 
        }
    },
});

export const { addStore } = storeSlice.actions;
export default storeSlice.reducer;