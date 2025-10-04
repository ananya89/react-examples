import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',  // Name of the slice
  initialState, // Initial state of the slice.
  reducers: {
    increment: (state) => {
      state.count += 1; // Increment the counter by 1
    },
    decrement: (state) => {
      state.count -= 1; // Decrement the counter by 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload; // Increment the counter by a specific amount
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // Exporting the action creators
export default counterSlice.reducer; // Exporting the reducer to be used in the store
