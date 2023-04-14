import { configureStore } from "@reduxjs/toolkit";
import userNameSlice from "./silces/userName.slice";

export default configureStore({
  reducer: {
    userName: userNameSlice,
  }
});
