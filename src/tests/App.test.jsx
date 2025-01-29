import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders App component correctly", () => {
    render(<App />);

    expect(screen.getByText(/Featured items/i)).toBeInTheDocument();

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
