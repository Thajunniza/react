import {useState} from 'react';
import * as R from 'ramda';

  // Handler defined outside with parameter
  const handleIncrement = (count,setCount) => {
    return () => {
        console.log(count);
        setCount(R.inc(count));
    };
  };

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div class="counter">
      <h1>Counter</h1>
      <h2>You have clicked {count} times</h2>
      <div class="flex" >
      <button onClick={handleIncrement(count,setCount)}>Increment</button>
      <button onClick={()=>setCount(x => R.dec(x))}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
