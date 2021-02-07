import React from "react";
import {
    Column,
    Grid,
    NavigationItem,
    Paper,
    Sidebar,
    Text,
} from "../../components";
import { useNavigation } from "../../components/Navigation/useNavigation";
import { ButtonDemo } from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import { GridDemo } from "./components/GridDemo";

const App: React.FC = () => {
    const nav = useNavigation();
    return (
        <Grid>
            <Column start={1} end={3}>
                <Sidebar>
                    <Paper>
                        <Text variant={"h1"}>DDD React Core</Text>

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
                        <hr />
                        <NavigationItem
                            onClick={(e) => {
                                console.log("Layout");
                            }}
                            id={"layout"}
                        >
                            Layout
                        </NavigationItem>
                        <NavigationItem
                            onClick={(e) => {
                                console.log("Buttons");
                            }}
                            id={"buttons"}
                        >
                            Buttons
                        </NavigationItem>
                        <NavigationItem
                            onClick={(e) => {
                                console.log("Forms");
                            }}
                            id={"forms"}
                        >
                            Forms
                        </NavigationItem>
                        <NavigationItem
                            onClick={(e) => {
                                console.log("Text");
                            }}
                            id={"text"}
                        >
                            Text
                        </NavigationItem>
                    </Paper>
                </Sidebar>
            </Column>
            <Column start={3} end={13}>
                {nav.state["layout"] && <GridDemo />}
                {nav.state["buttons"] && <ButtonDemo />}
                {nav.state["forms"] && <FormDemo />}
            </Column>
        </Grid>
    );
};

export default App;
