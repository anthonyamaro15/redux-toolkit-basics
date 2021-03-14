import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, test } from './redux/CounterSlice';

interface ReducerProps {
   counter: {
      count: number,
   }
}

function App() {
   const [name, setName] = useState({ firstName: 'example', lastName: 'anotherExample' });
   const dispatch = useDispatch();
   const { count } = useSelector((state: ReducerProps) => state.counter);

   const incrementCounter = () => {
      dispatch(increment());
   }
   const decrementCounter = () => {
      dispatch(decrement());
   }
   const tesFF = () => {
      // this will be the same as doing it with regular redux ===>  dispatch({ type: "TESTING", payload: name })
      // if you print action.paylod in the counterSlice it would be the name obj
      // { type: 'counter/test, payload: { firstName: 'example', lastName: 'anotherExample' } } 
      dispatch(test(name));
   }

  return (
    <div className="App">
      <h1>count: { count } </h1>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>
      <button onClick={tesFF}>testing</button>
    </div> 
  );
}

export default App;
