import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrips = createAsyncThunk(
  'trips/fetchTrips',
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

export const fetchTrip = createAsyncThunk(
  'trip/fetchTrip',
  async (data, { rejectWithValue }) => {
    const { token, id } = data;
    try {
      const response = await fetch(`https://travel-app-api.glitch.me/api/v1/trips/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      
      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const trip = await response.json();
      return trip;
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

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    trip: {},
    status: null,
    error: null
  },
  reducers: {
    setTrips(state, action) {
      state.trips = action.payload.trips;
    },
    setTrip(state, action) {
      state.trip = action.payload.trip;
    },
  },
  extraReducers: {
    // trips
    [fetchTrips.pending]: setLoading,
    [fetchTrips.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.trips = action.payload;
    },
    [fetchTrips.rejected]: setError,
    // trip
    [fetchTrip.pending]: setLoading,
    [fetchTrip.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.trip = action.payload;
    },
    [fetchTrip.rejected]: setError
  },
});

export const { setTrips, setTrip } = tripSlice.actions;

export default tripSlice.reducer;
