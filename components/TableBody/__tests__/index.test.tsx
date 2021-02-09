import { render } from "@testing-library/react";
import React from "react";
import { TableBody } from "../index";

describe("TableBody", () => {
    test("it renders without failure", () => {
        const element = render(<TableBody>TestTableBody</TableBody>);

        expect(element.queryAllByText("TestTableBody")).toHaveLength(1);
    });
});
