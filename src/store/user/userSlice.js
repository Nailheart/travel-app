import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-in', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setLoading = (state) => {
  state.status = 'loading';
  state.error = null;
}

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    status: null,
    error: null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
      state.status = null;
    }
  },
  extraReducers: {
    // login
    [login.pending]: setLoading,
    [login.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [login.rejected]: setError,
    // register
    [register.pending]: setLoading,
    [register.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [register.rejected]: setError
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;