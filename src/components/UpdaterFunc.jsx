import React, { useState } from "react";

function UpdaterFunc() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  function decrementCount() {
    setCount(c => c - 1);
    setCount(c => c - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Increment+1</button>
      <button onClick={decrementCount}>Decrement-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default UpdaterFunc;

