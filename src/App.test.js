import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("App.js", () => {
  const { container, getByText } = render(<App />);
  const incrementBtn = getByText("+1");
  const decrementBtn = getByText("-1");
  const resetBtn = getByText("Reset");

  const countLabel = container.querySelector("p");
  expect(countLabel).toHaveTextContent("Count: 0");

  fireEvent.click(incrementBtn);
  expect(countLabel).toHaveTextContent("Count: 1");

  fireEvent.click(resetBtn);
  expect(countLabel).toHaveTextContent("Count: 0");

  fireEvent.click(decrementBtn);
  expect(countLabel).toHaveTextContent("Count: -1");
});
