import React, { useState } from "react";
import { Paper } from "../../../components";
import { Button } from "../../../components/Button";
import { Column } from "../../../components/Column";
import { Grid } from "../../../components/Grid";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";

export const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Paper>
            <Grid>
                <Row>
                    <Column start={1} end={12}>
                        <Text variant={"h1"}>Buttons</Text>
                    </Column>
                    <Column start={3} end={7}>
                        <Text variant={"h3"}>Counter: {count}</Text>
                    </Column>
                </Row>

                <Row>
                    <Column start={3} end={7}>
                        <Column start={3} end={7}>
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
                        <Column start={3} end={7}>
                            <Button color={"error"} onClick={() => setCount(0)}>
                                Reset
                            </Button>
                        </Column>
                    </Column>
                </Row>
            </Grid>
        </Paper>
    );
};

export default ButtonDemo;
