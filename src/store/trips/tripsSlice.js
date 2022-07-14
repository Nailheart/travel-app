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
      const response = await fetch(`https://travel-app-api.glitch.me/api/v1/trips${id}`, {
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

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    status: null,
    error: null
  },
  reducers: {
    setTrips(state, action) {
      state.trips = action.payload.trips;
    },
    setTrip(state, action) {
      state.trips = action.payload.trip;
    },
  },
  extraReducers: {
    // trips
    [fetchTrips.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTrips.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.trips = action.payload;
    },
    [fetchTrips.rejected]: (state, action) => {
      state.state = 'rejected';
      state.error = action.payload;
    },
    // trip
    [fetchTrip.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTrip.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.trips = action.payload;
    },
    [fetchTrip.rejected]: (state, action) => {
      state.state = 'rejected';
      state.error = action.payload;
    }
  },
});

export const { setTrips, setTrip } = tripSlice.actions;

export default tripSlice.reducer;
