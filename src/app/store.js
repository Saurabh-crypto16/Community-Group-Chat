import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";

/*
userSlice is the part of data layer/REDUX that contains all the info about
the user and we can use this info from any component inside the app

appSlice contains all the generic info about the app
*/

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
