import { render } from "@testing-library/react";
import React from "react";
import { Row } from "../index";

describe("Row", () => {
    test("it renders without failure", () => {
        const element = render(<Row>TestRow</Row>);

        expect(element.queryAllByText("TestRow")).toHaveLength(1);
    });
});
