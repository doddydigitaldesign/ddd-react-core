import { render } from "@testing-library/react";
import React from "react";
import Button from "../Button";

describe("Button", () => {
    test("it renders without failure", () => {
        const element = render(
            <Button
                onClick={() => {
                    /* noop */
                }}
            >
                TestButton
            </Button>,
        );

        expect(element.queryAllByText("TestButton")).toHaveLength(1);
    });
});
