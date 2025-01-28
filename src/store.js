import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/stats/userSlice";
import gamesReducer from "./features/stats/gamesSlice";

let rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
});

export default configureStore({
  reducer: rootReducer,
  //   reducer: {
  //     user: userReducer,
  //   },
});
