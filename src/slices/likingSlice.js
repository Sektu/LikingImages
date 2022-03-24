import { createSlice } from "@reduxjs/toolkit";

export const likingSlice = createSlice({
  name: "isLiked",
  initialState: {
    data: {}
  },
  reducers: {
    doLike: (state, action) => {
      const name = action.payload;
      state.data = { ...state.data, [name]: true };
    },
    doDislike: (state, action) => {
      const name = action.payload;
      state.data = { ...state.data, [name]: false };
    }
  }
});

export const { doLike, doDislike } = likingSlice.actions;

export default likingSlice.reducer;
