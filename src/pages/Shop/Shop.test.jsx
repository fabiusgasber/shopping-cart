import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Shop from "./Shop";
import { MemoryRouter } from "react-router-dom";

describe("Shop page", () => {
  it("renders shop", () => {
    const { container } = render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders an initial loading state", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    const heading = screen.getByRole("heading").textContent;
    expect(heading).toMatch("Loading");
  });

  it("renders shop items", async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    await waitFor(async () => {
      const figures = await screen.findAllByRole("figure");
      expect(figures.length).toBeGreaterThan(0);
    });
  });
});
