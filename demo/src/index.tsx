import React from "react";
import { render } from "react-dom";
import { NavigationProvider } from "../../components";
import App from "./App";

render(
    <NavigationProvider
        navItems={[
            { active: false, id: "layout" },
            { active: false, id: "buttons" },
            { active: true, id: "forms" },
            { active: false, id: "text" },
            { active: false, id: "table" },
        ]}
    >
        <App />
    </NavigationProvider>,
    document.querySelector("#demo"),
);
