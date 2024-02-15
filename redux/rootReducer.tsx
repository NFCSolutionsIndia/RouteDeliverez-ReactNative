import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderCreationSlice';
import storeReducer from './storeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  order: orderReducer,
  store: storeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;