/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders Heading", () => {
  render(<App />);
  const text = screen.getByText("React application with some logic to test");
  expect(text).toBeInTheDocument();
});
