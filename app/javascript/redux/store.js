import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../feature/greetingSlice';

export const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});
