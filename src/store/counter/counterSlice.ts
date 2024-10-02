import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  counter: number;
  isReady: boolean;
}

const initialState: ICounterState = {
  counter: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.counter = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      if (state.counter === 0) return;
      state.counter--;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (state.counter < 0) action.payload = 0;
      state.counter = action.payload;
    },
  },
});

export const { decrement, increment, resetCounter, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
