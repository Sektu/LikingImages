import { createSlice } from "@reduxjs/toolkit";
import initialImages from "../data/data";

export const imagesSlice = createSlice({
    name: "images",
    initialState: {
      data: [...initialImages]
    },
    reducers: {
      addImage: (state, action) => {
        console.log("dispatch addImage");
        const image = action.payload;
        state.data = [...state.data, image];
        console.log(state.data);
      },
    }
  });

  export const { addImage } = imagesSlice.actions;

  export default imagesSlice.reducer;
  