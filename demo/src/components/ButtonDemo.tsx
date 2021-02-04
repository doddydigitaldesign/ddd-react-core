import React, { useState } from "react";
import { Paper } from "../../../components";
import { Button } from "../../../components/Button";
import { Column } from "../../../components/Column";
import { Grid } from "../../../components/Grid";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";

const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Grid container>
            <Paper>
                <Row>
                    <Column>
                        <Text variant={"h1"}>Buttons</Text>
                    </Column>
                    <Column>
                        <Text variant={"h3"}>Counter: {count}</Text>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <Column>
                            <Button
                                color={"success"}
                                onClick={() => setCount((val) => val + 1)}
                            >
                                Increment
                            </Button>
                            <Button
                                color={"primary"}
                                onClick={() => setCount((val) => val - 1)}
                            >
                                Decrement
                            </Button>
                        </Column>
                        <Column>
                            <Button color={"error"} onClick={() => setCount(0)}>
                                Reset
                            </Button>
                        </Column>
                    </Column>
                </Row>
            </Paper>
        </Grid>
    );
};

export default ButtonDemo;
