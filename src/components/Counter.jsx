import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
