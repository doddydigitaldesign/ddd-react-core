import { render } from "@testing-library/react";
import React from "react";
import { Accordion } from "../index";

describe("Accordion", () => {
    test("it renders without failure", () => {
        const element = render(
            <Accordion summaryProps={{ children: "Accordion" }}>
                TestAccordion
            </Accordion>,
        );

        expect(element.queryAllByText("TestAccordion")).toHaveLength(1);
    });
});
