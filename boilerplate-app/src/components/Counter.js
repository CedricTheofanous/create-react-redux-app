import React from "react";
import { }

const Counter = props => {
  const { count } = props;
  const increment = e => {};

  const decrement = e => {};

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
