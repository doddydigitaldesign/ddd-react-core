import { render } from "@testing-library/react";
import React from "react";
import { Table } from "../index";

describe("Table", () => {
    test("it renders without failure", () => {
        const element = render(<Table>TestTable</Table>);

        expect(element.queryAllByText("TestTable")).toHaveLength(1);
    });
});
