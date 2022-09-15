import { createSlice } from '@reduxjs/toolkit';

const amountSlice = createSlice({
  name: 'amount',
  initialState: { value: 1 },
  reducers: {
    changeAmount: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {changeAmount} = amountSlice.actions;
export const selectAmount = (state) => state.amount.value;
export default amountSlice.reducer;