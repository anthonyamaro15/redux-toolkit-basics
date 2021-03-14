import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface InitialStateProps {
   count: number,
   name: string,
   age: number,
   isStudent: boolean
}

const initialState: InitialStateProps = {
   count: 0,
   name: '',
   age: 0,
   isStudent: false
}

const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      //({...state, count: state.count + 1 }) regular redux way of doing it
      // both ways work
      increment: state => { state.count += 1 },
      decrement: state => ({...state, count: state.count - 1 }),
      test: (state, action) => {
      // action === { type: 'counter/test, payload: { firstName: 'example', lastName: 'anotherExample' } } 
      }
   }
});

export const { increment, decrement, test } = counterSlice.actions
// Other code such as selectors can use the imported `RootState` type ?
// this line is a bit confusing
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
