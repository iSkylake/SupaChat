import { configureStore } from '@reduxjs/toolkit';
import supaChatsReducer from '../features/supachats/supaChatsSlice';

export default configureStore({
  reducer: {
    supaChats: supaChatsReducer,
  },
});
