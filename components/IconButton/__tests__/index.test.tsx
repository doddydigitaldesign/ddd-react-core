import { render } from "@testing-library/react";
import React from "react";
import { IconButton } from "../index";

describe("IconButton", () => {
    test("it renders without failure", () => {
        const element = render(
            <IconButton id={"TestIconButton"} label={"TestIconButton"} />,
        );

        expect(element.container).toBeTruthy();
    });
});
