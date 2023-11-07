import { configureStore } from '@reduxjs/toolkit';
import scheduleSlice from '../slices/scheduleSlice';

const store = configureStore({
    reducer: {
        scheduleSlice,
        
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;