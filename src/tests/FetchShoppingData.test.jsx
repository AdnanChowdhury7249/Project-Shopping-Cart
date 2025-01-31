import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import FetchShoppingData from "../components/FetchShoppingData";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

const mockProducts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: (i + 1) * 10,
  image: "https://via.placeholder.com/150",
}));

vi.stubGlobal("fetch", vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProducts),
  })
));

describe("FetchShoppingData Component", () => {

  it("renders loading text initially", () => {
    render(<FetchShoppingData />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("When showall is false to only show 9 products", async () => {
    render(<FetchShoppingData showAll={false} />);

    await waitFor(() => {
      const productElement = screen.getAllByText(/Product/i)
      expect(productElement.length).toBeLessThanOrEqual(9)
    })
  })

  it("when showall is true show all the products", async () => {
    render(<FetchShoppingData showAll={true} />)

    await waitFor(() => {
      const productElements = screen.getAllByText(/Product/i);
      expect(productElements.length).toBe(mockProducts.length)
    })
  })


})
