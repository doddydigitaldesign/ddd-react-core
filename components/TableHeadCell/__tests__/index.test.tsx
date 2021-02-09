import { render } from "@testing-library/react";
import React from "react";
import { TableHeadCell } from "../index";

describe("TableHeadCell", () => {
    test("it renders without failure", () => {
        const element = render(
            <TableHeadCell>TestTableHeadCell</TableHeadCell>,
        );

        expect(element.queryAllByText("TestTableHeadCell")).toHaveLength(1);
    });
});
