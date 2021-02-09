import { render } from "@testing-library/react";
import React from "react";
import { TableDataCell } from "../index";

describe("TableDataCell", () => {
    test("it renders without failure", () => {
        const element = render(
            <TableDataCell title={"TestTableDataCell"}>
                TestTableDataCell
            </TableDataCell>,
        );

        expect(element.queryAllByText("TestTableDataCell")).toHaveLength(1);
    });
});
