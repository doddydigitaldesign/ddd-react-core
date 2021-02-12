import { render } from "@testing-library/react";
import React from "react";
import { TextArea } from "../index";

describe("TextArea", () => {
    test("it renders without failure", () => {
        const element = render(
            <TextArea id={"TestTextArea"} label={"TestTextArea"} />,
        );

        expect(element.container).toBeTruthy();
    });
});
