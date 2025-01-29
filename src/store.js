import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/stats/userSlice";
import gamesReducer from "./features/stats/gamesSlice";
import playtimeReducer from "./features/stats/playtimeSlice";
import bossesReducer from "./features/stats/bossesSlice";
import achievementsReducer from "./features/stats/achievementsSlice";

let rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  playtime: playtimeReducer,
  bosses: bossesReducer,
  achievements: achievementsReducer,
});

export default configureStore({
  reducer: rootReducer,
  //   reducer: {
  //     user: userReducer,
  //   },
});
