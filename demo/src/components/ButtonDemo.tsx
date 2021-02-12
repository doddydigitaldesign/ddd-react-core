import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    CircleOutline,
    IconButton,
    Paper,
} from "../../../components";
import { Button } from "../../../components/Button";
import { Column } from "../../../components/Column";
import { Grid } from "../../../components/Grid";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";

export const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Paper>
            <Grid colcount={1}>
                <Row rowIndex={1}>
                    <Column start={1} end={12}>
                        <Text variant={"h2"}>Button</Text>
                    </Column>
                </Row>

                <Row rowIndex={2}>
                    <Column start={1} end={4} colindex={1}>
                        <Button
                            color={"success"}
                            onClick={() => setCount((val) => val + 1)}
                        >
                            Increment
                        </Button>
                    </Column>
                    <Column start={4} end={8} colindex={2}>
                        <Button
                            color={"primary"}
                            onClick={() => setCount((val) => val - 1)}
                        >
                            Decrement
                        </Button>
                    </Column>
                    <Column start={8} end={12} colindex={3}>
                        <Button color={"error"} onClick={() => setCount(0)}>
                            Reset
                        </Button>
                    </Column>
                </Row>
                <Row rowIndex={1}>
                    <Column start={1} end={12}>
                        <Text variant={"h2"}>IconButton</Text>
                    </Column>
                </Row>

                <Row rowIndex={2}>
                    <Column start={1} end={4} colindex={1}>
                        <IconButton
                            id={"icon-button-circle-outline"}
                            label={"Circle Outline"}
                            icon={
                                <CircleOutline
                                    style={{ stroke: "var(--bg-success)" }}
                                />
                            }
                        />
                    </Column>
                    <Column start={4} end={8} colindex={2}>
                        <IconButton
                            id={"icon-button-chevron-down"}
                            label={"Decrease"}
                            icon={
                                <ChevronDown
                                    style={{
                                        stroke: "var(--bg-error)",
                                        fill: "var(--bg-error)",
                                    }}
                                />
                            }
                        />
                    </Column>
                    <Column start={8} end={12} colindex={3}>
                        <IconButton
                            id={"icon-button-chevron-up"}
                            label={"Increase"}
                            icon={<ChevronUp />}
                        />
                    </Column>
                </Row>
            </Grid>
        </Paper>
    );
};

export default ButtonDemo;
