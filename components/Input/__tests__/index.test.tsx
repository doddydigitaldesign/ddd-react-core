import { render } from "@testing-library/react";
import React from "react";
import { Input } from "../index";

describe("Input", () => {
    test("it renders without failure", () => {
        const element = render(<Input id={"TestInput"} label={"TestInput"} />);

        expect(element.container).toBeTruthy();
    });
});
