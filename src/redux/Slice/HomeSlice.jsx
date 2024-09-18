import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDashboardData = createAsyncThunk(
  "home/fetchDashboardData",
  async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      return response.json();
    } catch (error) {
      throw error;
    }
  }
);

const slice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    productArray: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.productArray = action.payload;
        state.error = ''
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const getAllProducts = (state) => state.home.productArray;
export const getProductLoadingState = (state) => state.home.loading;
export const getProductError = (state) => state.home.error;

export default slice.reducer;
