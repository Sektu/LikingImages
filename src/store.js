import { configureStore } from "@reduxjs/toolkit";
import likingReducer from "./slices/likingSlice";
import imagesReducer from "./slices/imagesSlice";

export default configureStore({
  reducer: {
    liking: likingReducer,
    images: imagesReducer,
  }
});
