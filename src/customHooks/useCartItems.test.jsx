import { describe, it, expect } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import useCartItems from "./useCartItems";

describe("useCartItems", () => {
  const dummyItem = { title: "Test Item", id: 0 };
  const dummyItem2 = { title: "Test Item 2", id: 1 };

  it("returns empty cart item array when loaded with no items", async () => {
    const { result } = renderHook(() => useCartItems());
    await waitFor(() => {
      const { cartItems } = result.current;
      expect(cartItems.length).toBe(0);
    });
  });

  it("adds item to bag", async () => {
    const { result } = renderHook(() => useCartItems());
    act(() => {
      result.current.addToBag("", dummyItem, 2);
    });
    act(() => {
      result.current.addToBag("", dummyItem2, 1);
    });
    await waitFor(() => {
      const { cartItems } = result.current;
      expect(cartItems).toHaveLength(2);
      const item1 = cartItems.find((item) => item.id === dummyItem.id);
      const item2 = cartItems.find((item) => item.id === dummyItem2.id);

      expect(item1).toBeDefined();
      expect(item1.title).toMatch(dummyItem.title);
      expect(item1.quantity).toBe(2);

      expect(item2).toBeDefined();
      expect(item2.title).toMatch(dummyItem2.title);
      expect(item2.quantity).toBe(1);
    });
  });

  it("removes item from bag", async () => {
    const { result } = renderHook(() => useCartItems());
    act(() => {
      result.current.addToBag("", dummyItem, 2);
    });
    act(() => {
      result.current.addToBag("", dummyItem2, 5);
    });
    act(() => {
      result.current.deleteItem(dummyItem);
    });
    await waitFor(() => {
      const { cartItems } = result.current;
      expect(cartItems).toHaveLength(1);
      const item1 = cartItems.find((item) => item.id === dummyItem.id);
      const item2 = cartItems.find((item) => item.id === dummyItem2.id);
      expect(item1).not.toBeDefined();
      expect(item2).toBeDefined();
      expect(item2.title).toMatch(dummyItem2.title);
      expect(item2.quantity).toBe(5);
    });
  });
});
