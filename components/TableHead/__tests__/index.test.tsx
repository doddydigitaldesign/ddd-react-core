import { render } from "@testing-library/react";
import React from "react";
import { TableHead } from "../index";

describe("TableHead", () => {
    test("it renders without failure", () => {
        const element = render(<TableHead>TestTableHead</TableHead>);

        expect(element.queryAllByText("TestTableHead")).toHaveLength(1);
    });
});
