import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface TimeState {
  time: string;
}

const initialState: TimeState = {
  time: new Date().toISOString(),
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    tick: (state: TimeState) => {
      state.time = new Date().toISOString();
    },
  },
});

export const selectTime = (state: RootState) => state.time.time;
export const { tick } = timeSlice.actions;
export default timeSlice.reducer;
