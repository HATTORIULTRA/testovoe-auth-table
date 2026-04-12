import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ProductsResponse, ProductsState } from '@/features/Products/model/types.ts';
import instance from '@/shared/api/instance.ts';
import type { AppDispatch } from '@/app/providers/store/store.ts';

export const getProducts = createAsyncThunk<
  ProductsResponse,
  { search?: string; sortBy?: string; order?: string } | undefined,
  { dispatch: AppDispatch }
>('products/getProducts', async (params, { dispatch }) => {
  const url = params?.search
    ? `products/search?q=${params.search}&limit=200`
    : 'products?limit=200';

  const response = await instance.get(url, {
    params: {
      sortBy: params?.sortBy,
      order: params?.order,
    },
    onDownloadProgress: (progressEvent) => {
      const percent = Math.round(progressEvent.loaded * 100);

      dispatch(setProgress(percent));
    },
  });

  if (!response) {
    throw new Error('Cant fetch products');
  }

  console.log(response.data);

  return response.data;
});

const initialState: ProductsState = {
  data: [],
  total: 0,
  isLoading: false,
  progress: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.products;
        state.total = action.payload.total;
        state.progress = 100;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setProgress } = productsSlice.actions;
export default productsSlice.reducer;
