import { render } from "@testing-library/react";
import React from "react";
import { Switch } from "../index";

describe("Switch", () => {
    test("it renders without failure", () => {
        const element = render(
            <Switch label={"TestSwitch"} id={"TestSwitch"} />,
        );

        expect(element.queryAllByText("TestSwitch")).toHaveLength(1);
    });
});
