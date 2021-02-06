import React from "react";
import { Paper, Text } from "../../components";
import { ButtonDemo } from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import { GridDemo } from "./components/GridDemo";

const App: React.FC = () => {
    return (
        <Paper>
            <Text variant={"h1"}>DDD React Core</Text>
            <hr />
            <Text variant={"p"}>
                View code on{" "}
                <a
                    href={
                        "https://github.com/doddydigitaldesign/ddd-react-core"
                    }
                >
                    GitHub
                </a>
            </Text>
            <GridDemo />
            <ButtonDemo />
            <FormDemo />
        </Paper>
    );
};

export default App;
