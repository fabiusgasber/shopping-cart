import { describe, it, expect } from "vitest";
import { render, screen, renderHook, waitFor } from "@testing-library/react";
import Shop from "./Shop";
import useData from "../../customHooks/useData";
import { MemoryRouter } from "react-router-dom";

describe("Shop page", () => {

    it("renders shop", () => {
        const { container } = render(<MemoryRouter><Shop /></MemoryRouter>);
        expect(container).toMatchSnapshot();
    })

    it("renders an initial loading state", () => {
        render(<MemoryRouter><Shop /></MemoryRouter>);
        const heading = screen.getByRole("heading").textContent;
        expect(heading).toMatch("Loading");
    })

    it("renders shop items", async () => {
        render(<MemoryRouter>
            <Shop />
            </MemoryRouter>);
       await waitFor(async () => {
        const figures =  await screen.findAllByRole("figure");
        expect(figures.length).toBeGreaterThan(0);
        })
    })

})

describe("useData()", () => {

    it("should return the initial values for data, error and loading when called with no url", async () => {
       const { result }  = renderHook(() => useData());
       await waitFor(() => {
       const { loading, error, data } = result.current
       expect(loading).toBeTruthy();
       expect(error).toBeNull();
       expect(data).toBeNull();
       })
    })

    it("fetches dummy json data", async () => {
        const mockResponse = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    }
    const testUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const { result } = renderHook(() => useData(testUrl));
    await waitFor(() => {
    expect(result.current.data).toEqual(mockResponse);
    });
    })

    it("throws error when url is not available", async () => {

        const { result } = renderHook(() => useData("https://fakeurlblabla.com"));
        await waitFor(() => {
            const { error, loading, data } = result.current;
            expect(loading).toBeFalsy();
            expect(error).not.toBeNull();
            expect(data).toBeNull();
        })
         
    })
})