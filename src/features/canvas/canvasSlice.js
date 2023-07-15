import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Opacity from "./Opacity";
import { fetchRandomColor } from "./canvasAPI";

const initialState = {
  color: {
    code: "#000000",
    status: "complete",
  },
  font: {
    size: 16,
  },
  opacity: {
    num: 0.2,
  },
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color.code = action.payload;
    },
    changeFont: (state, action) => {
      state.font.size = action.payload;
    },
    changeOpacity: (state, action) => {
      state.opacity.num = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paintColorAsync.pending, (state) => {
        state.color.status = "loading";
      })
      .addCase(paintColorAsync.fulfilled, (state, action) => {
        state.color.status = "complete";
        state.color.code = action.payload;
      });
  },
});
export const paintColorAsync = createAsyncThunk(
  "canvas/fetchRandomColor",
  async () => {
    const response = await fetchRandomColor();
    return response.data;
  }
);
export const selectColor = (state) => state.canvas.color.code;
export const selectFont = (state) => state.canvas.font.size;
export const selectOpacity = (state) => state.canvas.opacity.num;
export const selectColorLoading = (state) => state.canvas.color.status;

export const { changeColor, changeFont, changeOpacity } = canvasSlice.actions;
export default canvasSlice.reducer;
