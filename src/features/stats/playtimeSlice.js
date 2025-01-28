import { createSlice } from "@reduxjs/toolkit";

export const playtimeSlice = createSlice({
  name: "playtime",
  initialState: {},
  reducers: {
    setPlaytime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPlaytime } = playtimeSlice.actions;

export default playtimeSlice.reducer;
