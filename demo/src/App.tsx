import React from "react";
import { ButtonDemo } from "./components/ButtonDemo";
import { GridDemo } from "./components/GridDemo";

const App: React.FC = () => {
    return (
        <div>
            <GridDemo />
            <ButtonDemo />
        </div>
    );
};

export default App;
