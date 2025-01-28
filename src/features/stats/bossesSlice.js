import { createSlice } from "@reduxjs/toolkit";

export const bossesSlice = createSlice({
  name: "bosses",
  initialState: {},
  reducers: {
    setBosses: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBosses } = bossesSlice.actions;

export default bossesSlice.reducer;
