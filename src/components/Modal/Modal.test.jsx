import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Modal from "./Modal";

describe("Modal component", () => {

    it("renders modal", () => {
        const { container } = render(<Modal />);
        expect(container).toMatchSnapshot();
    })

    it("opens when clicked", async () => {
        const user = userEvent.setup();
        render(<Modal />);
        const modalBtn = screen.getByRole("button", {name: "shopping cart"});

        await user.click(modalBtn);

        expect(screen.getByRole("dialog")).toBeInTheDocument();
    })

    it("is closed when not clicked", () => {
        render(<Modal />)

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    })

    it("displays correct title", () => {
        render(<Modal initialShow={true} title={"Shopping Cart"}/>);
        expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    })

});
