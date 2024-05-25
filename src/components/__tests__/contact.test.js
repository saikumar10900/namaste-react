import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("render Contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("render Submit button", () => {
  render(<Contact />);
  const heading = screen.getByRole("button", { name: "Submit" });
  expect(heading).toBeInTheDocument();
});
