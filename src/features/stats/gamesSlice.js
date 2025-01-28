import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {},
  reducers: {
    setGames: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
