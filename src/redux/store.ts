import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';

const reducer = combineReducers({
   counter: counterSlice
});

const store = configureStore({
   reducer
});

export type RootState = ReturnType<typeof store.getState>
export default store;
