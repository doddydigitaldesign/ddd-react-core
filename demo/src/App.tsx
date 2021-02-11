import React from "react";
import {
    Column,
    Grid,
    NavigationItem,
    Paper,
    Row,
    Sidebar,
    Text,
} from "../../components";
import { useNavigation } from "../../components/Navigation/useNavigation";
import { ButtonDemo } from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import { GridDemo } from "./components/GridDemo";
import TablesDemo from "./components/TablesDemo";
import { TextDemo } from "./components/TextsDemo";

const App: React.FC = () => {
    const nav = useNavigation();
    return (
        <Grid>
            <Row>
                <Column start={1} span={2}>
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
                            <Column start={1} end={13}>
                                <Row>
                                    <NavigationItem id={"layout"}>
                                        Layout
                                    </NavigationItem>
                                </Row>
                                <Row>
                                    <NavigationItem id={"buttons"}>
                                        Buttons
                                    </NavigationItem>
                                </Row>
                                <Row>
                                    <NavigationItem id={"forms"}>
                                        Forms
                                    </NavigationItem>
                                </Row>
                                <Row>
                                    <NavigationItem id={"text"}>
                                        Text
                                    </NavigationItem>
                                </Row>
                                <Row>
                                    <NavigationItem id={"table"}>
                                        Tables
                                    </NavigationItem>
                                </Row>
                            </Column>
                        </Paper>
                    </Sidebar>
                </Column>
                <Column start={3} span={9}>
                    {nav.state["layout"] && <GridDemo />}
                    {nav.state["buttons"] && <ButtonDemo />}
                    {nav.state["forms"] && <FormDemo />}
                    {nav.state["text"] && <TextDemo />}
                    {nav.state["table"] && <TablesDemo />}
                </Column>
            </Row>
        </Grid>
    );
};

export default App;
