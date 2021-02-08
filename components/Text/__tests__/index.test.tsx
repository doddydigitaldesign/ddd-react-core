import { render } from "@testing-library/react";
import React from "react";
import { Text } from "../index";

describe("Text", () => {
    test("it renders without failure", () => {
        const element = render(<Text variant={"p"}>TestText</Text>);

        expect(element.queryAllByText("TestText")).toHaveLength(1);
    });
});
