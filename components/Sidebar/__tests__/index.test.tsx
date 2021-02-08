import { render } from "@testing-library/react";
import React from "react";
import { Sidebar } from "../index";

describe("Sidebar", () => {
    test("it renders without failure", () => {
        const element = render(<Sidebar>TestSidebar</Sidebar>);

        expect(element.queryAllByText("TestSidebar")).toHaveLength(1);
    });
});
