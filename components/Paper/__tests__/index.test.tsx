import { render } from "@testing-library/react";
import React from "react";
import { Paper } from "../index";

describe("Paper", () => {
    test("it renders without failure", () => {
        const element = render(<Paper>TestPaper</Paper>);

        expect(element.queryAllByText("TestPaper")).toHaveLength(1);
    });
});
