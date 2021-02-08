import { render } from "@testing-library/react";
import React from "react";
import { Grid } from "../index";

describe("Grid", () => {
    test("it renders without failure", () => {
        const element = render(<Grid>TestGrid</Grid>);

        expect(element.queryAllByText("TestGrid")).toHaveLength(1);
    });
});
