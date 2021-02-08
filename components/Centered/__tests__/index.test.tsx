import { render } from "@testing-library/react";
import React from "react";
import { Centered } from "../index";

describe("Centered", () => {
    test("it renders without failure", () => {
        const element = render(<Centered>TestCentered</Centered>);

        expect(element.queryAllByText("TestCentered")).toHaveLength(1);
    });
});
