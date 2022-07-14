import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch('https://travel-app-api.glitch.me/api/v1/trips', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const trips = await response.json();
      return trips;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchBooking = createAsyncThunk(
  'bookings/fetchBooking',
  async (data, { rejectWithValue }) => {
    const { token, id } = data;
    try {
      const response = await fetch(`https://travel-app-api.glitch.me/api/v1/trips${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const trips = await response.json();
      return trips;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeBookings = createAsyncThunk(
  'bookings/removeBookings',
  async (data, {rejectWithValue, dispatch}) => {
    const { token, id } = data;
    try {
      const response = await fetch(`https://travel-app-api.glitch.me/api/v1/trips${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })

      if (!response.ok) {
        throw new Error('Can\'t delete task. Server error.');
      }

      dispatch(removeBooking({id}));
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

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: null,
    error: null,
  },
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload.booking);
    },
    removeBooking(state, action) {
      state.bookings = state.bookings.filter(item => item.id === action.payload.id);
    },
  },
  extraReducers: {
    // bookings
    [fetchBookings.pending]: setLoading,
    [fetchBookings.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.bookings = action.payload;
    },
    [fetchBookings.rejected]: setError,
    // booking
    [fetchBooking.pending]: setLoading,
    [fetchBooking.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.bookings = action.payload;
    },
    [fetchBooking.rejected]: setError,
    // remove
    [removeBookings.rejected]: setError,
  },
});

export const { addBooking, removeBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
