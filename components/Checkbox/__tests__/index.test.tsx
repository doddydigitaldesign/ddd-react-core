import { render } from "@testing-library/react";
import React from "react";
import { Checkbox } from "../index";

describe("Checkbox", () => {
    test("it renders without failure", () => {
        const element = render(
            <Checkbox label={"TestCheckbox"} id={"TestCheckbox"} />,
        );

        expect(element.queryAllByText("TestCheckbox")).toHaveLength(1);
    });
});
