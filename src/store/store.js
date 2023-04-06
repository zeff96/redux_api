import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/usersSlice";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
