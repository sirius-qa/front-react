import React, { useState } from "react";
import CustomButton from "./components/CustomButton/CustomButton";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const handleDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <CustomButton type="button" onClick={handleDecrement}>
          -1
        </CustomButton>
        <CustomButton type="button" onClick={handleReset}>
          Reset
        </CustomButton>
        <CustomButton type="button" onClick={handleIncrement}>
          +1
        </CustomButton>
      </div>
    </div>
  );
};

export default App;
