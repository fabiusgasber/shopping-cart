import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useData from "./useData";

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