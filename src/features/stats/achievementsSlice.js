import { createSlice } from "@reduxjs/toolkit";

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {},
  reducers: {
    setAchievements: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAchievements } = achievementsSlice.actions;

export default achievementsSlice.reducer;
