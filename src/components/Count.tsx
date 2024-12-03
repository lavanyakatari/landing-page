import React, { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const valueIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={valueIncrement}>increment</button>
    </div>
  );
};
