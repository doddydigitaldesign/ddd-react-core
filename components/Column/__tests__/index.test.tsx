import { render } from "@testing-library/react";
import React from "react";
import { Column } from "../index";

describe("Column", () => {
    test("it renders without failure", () => {
        const element = render(
            <Column start={1} end={13}>
                TestColumn
            </Column>,
        );

        expect(element.queryAllByText("TestColumn")).toHaveLength(1);
    });
});
