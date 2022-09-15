import { configureStore } from '@reduxjs/toolkit';
import amountSlice from './amountSlice';

const store = configureStore({
  reducer: {
    amount: amountSlice
  }
});

export default store;