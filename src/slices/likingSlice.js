import { createSlice } from "@reduxjs/toolkit";

export const likingSlice = createSlice({
  name: "isLiked",
  initialState: {
    data: {}
  },
  reducers: {
    doLike: (state, action) => {
      console.log("dispatch doLike");
      const name = action.payload;
      state.data = { ...state.data, [name]: true };
      console.log(state.data);
    },
    doDislike: (state, action) => {
      console.log("dispatch doDislike");
      const name = action.payload;
      state.data = { ...state.data, [name]: false };
      console.log(state.data);
    }
  }
});

export const { doLike, doDislike } = likingSlice.actions;

export default likingSlice.reducer;
