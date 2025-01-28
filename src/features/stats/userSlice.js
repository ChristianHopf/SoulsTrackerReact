import { createSlice } from "@reduxjs/toolkit";

/**
 * user: {
 *  avatarmedium: string (img url),
 *  personaname: string,
 *  steamid: number
 * }
 */
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
