import { render } from "@testing-library/react";
import React from "react";
import { Form } from "../index";

describe("Form", () => {
    test("it renders without failure", () => {
        const element = render(<Form>TestForm</Form>);

        expect(element.queryAllByText("TestForm")).toHaveLength(1);
    });
});
