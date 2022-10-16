import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { BrowserRouter } from "react-router-dom";
import Menu from ".";

test("renders Work History nav link", () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Work History/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Code Examples nav link", () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Code Examples/i);
  expect(linkElement).toBeInTheDocument();
});
