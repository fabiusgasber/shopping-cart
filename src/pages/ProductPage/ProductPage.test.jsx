import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductPage from "./ProductPage";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Product Page", () => {
  const dummyItem = {
    title: "Test Item",
    price: 20.99,
    description: "Lorem ipsum",
  };

  it("renders product page", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a product", () => {
    render(
      <MemoryRouter>
        <ProductPage propItem={dummyItem} />
      </MemoryRouter>,
    );
    const title = screen.getByRole("heading", { name: dummyItem.title });
    const descr = screen.getByText(dummyItem.description);
    const price = screen.getByText(dummyItem.price + " $");
    expect(title).toBeInTheDocument();
    expect(descr).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("renders default value for quantity", () => {
    render(
      <MemoryRouter>
        <ProductPage propItem={dummyItem} />
      </MemoryRouter>,
    );
    const quantityOutput = screen.getByRole("status");
    expect(parseInt(quantityOutput.textContent)).toBe(1);
  });

  it("lets users select a quantity", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductPage propItem={dummyItem} />
      </MemoryRouter>,
    );

    const decreaseBtn = screen.getByRole("button", {
      name: "decrease quantity",
    });
    const increaseBtn = screen.getByRole("button", {
      name: "increase quantity",
    });
    const quantityOutput = screen.getByRole("status");

    await user.click(increaseBtn);
    await user.click(increaseBtn);
    await user.click(decreaseBtn);

    expect(parseInt(quantityOutput.textContent)).toBe(2);
  });

  it.todo(
    "should call the addToBag function when user clicks add to bag",
    async () => {
      const user = userEvent.setup();
      const addToBag = vi.fn();
      render(
        <MemoryRouter>
          <ProductPage propItem={dummyItem} onClick={addToBag} />
        </MemoryRouter>,
      );
      const addToBagBtn = screen.getByRole("button", { name: "Add to bag" });

      await user.click(addToBagBtn);

      expect(addToBag).toHaveBeenCalled();
    },
  );
});
