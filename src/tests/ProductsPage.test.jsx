import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 20,
  image: "https://via.placeholder.com/150",
};

vi.stubGlobal("fetch", vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProduct),
  })
));

describe("ProductPage Component", () => {
  it("displays the correct product details", async () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`£${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
  });
});
