import { render } from "@testing-library/react";
import React from "react";
import { NavigationProvider } from "../../Navigation";
import { NavigationItem } from "../index";

describe("NavigationItem", () => {
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
