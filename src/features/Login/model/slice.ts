import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../../shared/api/instance.ts';
import type { FieldType, IAuthState, UserData } from './types.ts';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (params: FieldType): Promise<UserData> => {
    const res = await instance.post('/auth/login', {
      username: params?.username,
      password: params?.password,
    });

    const { accessToken, refreshToken } = res.data;

    const storage = params.remember ? localStorage : sessionStorage;

    storage.setItem('access_token', accessToken);
    storage.setItem('refresh_token', refreshToken);

    return res.data;
  },
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const res = await instance.get('/auth/me');
  return res.data;
});

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isAuthChecked = true;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
