import { render } from "@testing-library/react";
import React from "react";
import { NavigationItem } from "../../NavigationItem";
import { NavigationProvider } from "../index";

describe("NavigationProvider", () => {
    test("it renders without failure", () => {
        const element = render(
            <NavigationProvider
                navItems={[{ active: true, id: "TestNavigationItem" }]}
            >
                <NavigationItem id={"TestNavigationItem"}>
                    TestNavigationItem
                </NavigationItem>
            </NavigationProvider>,
        );

        expect(element.queryAllByText("TestNavigationItem")).toHaveLength(1);
    });
});
