import React from "react";
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
};
export default Button;
