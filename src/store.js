import { configureStore } from "@reduxjs/toolkit";
import likingReducer from "./slices/likingSlice";

export default configureStore({
  reducer: {
    liking: likingReducer
  }
});
