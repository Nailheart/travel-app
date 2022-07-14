import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import tipsReducer from './trips/tripsSlice';
import bookingsReducer from './bookings/bookingsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tipsReducer,
    bookings: bookingsReducer,
  },
});

export { store };