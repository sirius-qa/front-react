import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton/CustomButton";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    "& > *:not(:last-child)": {
      marginRight: "1.5rem",
    },
  },
}));

const App = () => {
  const styles = useStyles();

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
    <div className={styles.root}>
      <p>Count: {count}</p>
      <div className={styles.buttonsContainer}>
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
