import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/stats/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
