import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ProductsState } from './types.ts';
import instance from "../../../shared/api/instance.ts";


export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await instance.get('products');

    if (!response) {
      throw new Error('Cant fetch products');
    }
    console.log(response.data);
    return response.data;
  },
);

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
