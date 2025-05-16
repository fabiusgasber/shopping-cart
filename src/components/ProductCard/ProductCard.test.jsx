import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard component", () => {
  const url = "https://placehold.co/600x400";
  const alt = "Placeholder";
  const placeholder = { text: "This is a placeholder text", price: "19.99" };

  it("renders image with the correct src and alt attributes", () => {
    render(
      <MemoryRouter>
        <ProductCard url={url} alt={alt} />
      </MemoryRouter>,
    );

    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute("alt", alt);
    expect(img).toHaveAttribute("src", url);
  });

  it("renders placeholder with correct text and price if provided", () => {
    render(
      <MemoryRouter>
        <ProductCard url={url} alt={alt} caption={placeholder} />
      </MemoryRouter>,
    );

    const placeholderElem = screen.getByText(placeholder.text);
    const priceElem = screen.getByText(`${placeholder.price} $`);
    expect(priceElem).toBeInTheDocument();
    expect(placeholderElem).toBeInTheDocument();
  });

  it("does not render placeholder if omitted", () => {
    render(
      <MemoryRouter>
        <ProductCard url={url} alt={alt} />
      </MemoryRouter>,
    );

    const placeholderElem = screen.queryByText(placeholder.text);
    const priceElem = screen.queryByText(placeholder.price);
    expect(placeholderElem).not.toBeInTheDocument();
    expect(priceElem).not.toBeInTheDocument();
  });
});
