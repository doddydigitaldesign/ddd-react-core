import { render } from "@testing-library/react";
import React from "react";
import { TableRow } from "../index";

describe("TableRow", () => {
    test("it renders without failure", () => {
        const element = render(<TableRow>TestTableRow</TableRow>);

        expect(element.queryAllByText("TestTableRow")).toHaveLength(1);
    });
});
