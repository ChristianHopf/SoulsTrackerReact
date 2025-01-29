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
  },
  reducers: {},
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

export default statsSlice.reducer;
