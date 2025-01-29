import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStats } from "../../utils/api";

export const fetchStatsData = createAsyncThunk(
  "stats/fetchStatsData",
  async (args) => {
    const response = await fetchStats(args.steamid, args.appid);
    return response;
  }
);

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    data: {},
    loading: false,
    error: null,
    sort: "date-new",
  },
  reducers: {
    sortAchievements: (state, action) => {
      console.log("sorting");
      let sort = action.payload;
      state.sort = sort;
      switch (sort) {
        case "date-new":
          // sort: < 0 if a < b, 0 if a == b, > 0 if a > b
          state.data.achievements = state.data.achievements.sort((a, b) => {
            return parseInt(b.unlocktime) - parseInt(a.unlocktime);
          });
          break;
        case "date-old":
          state.data.achievements = state.data.achievements.sort((a, b) => {
            return parseInt(a.unlocktime) - parseInt(b.unlocktime);
          });
          break;
        case "rarity-most":
          state.data.achievements = state.data.achievements.sort((a, b) => {
            return parseInt(a.rarity) - parseInt(b.rarity);
          });
          break;
        case "rarity-least":
          state.data.achievements = state.data.achievements.sort((a, b) => {
            return parseInt(b.rarity) - parseInt(a.rarity);
          });
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStatsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { sortAchievements } = statsSlice.actions;

export default statsSlice.reducer;
