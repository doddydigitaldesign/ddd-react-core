import React, { useState } from "react";
import {
    Accordion,
    Centered,
    Column,
    Grid,
    Paper,
    Row,
    Text,
} from "../../../components";

export const GridDemo: React.FC = () => {
    const exampleCode = `<Grid>
    <Column start={1} end={4}>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>A</Text>
                </Centered>
            </Paper>
        </Row>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>B</Text>
                </Centered>
            </Paper>
        </Row>
    </Column>
    <Column start={4} end={5}>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>C</Text>
                </Centered>
            </Paper>
        </Row>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>D</Text>
                </Centered>
            </Paper>
        </Row>
    </Column>
    <Column start={5} end={12}>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>E</Text>
                </Centered>
            </Paper>
        </Row>
        <Row>
            <Paper>
                <Centered>
                    <Text variant={"p"}>F</Text>
                </Centered>
            </Paper>
        </Row>
    </Column>
</Grid>`;

    const [codeOpen, setCodeOpen] = useState(false);
    return (
        <Paper>
            <Grid>
                <Column start={1} end={13}>
                    <Text variant={"h1"}>Layout</Text>
                    <Text variant={"h3"}>
                        The Grid, Row and Column components use CSS Grid to
                        simplify different layouts.
                    </Text>
                </Column>

                <Column start={1} end={13}>
                    <Accordion
                        open={codeOpen}
                        onToggle={(e) => {
                            if (
                                e.target &&
                                (e.target as typeof e.target & {
                                    open: boolean;
                                }).open
                            ) {
                                setCodeOpen(
                                    (e.target as typeof e.target & {
                                        open: boolean;
                                    }).open,
                                );
                            } else {
                                setCodeOpen(false);
                            }
                        }}
                        summaryProps={{
                            children: "Code example",
                        }}
                    >
                        <Text variant={"pre"}>
                            <Text variant={"code"}>{exampleCode}</Text>
                        </Text>
                    </Accordion>
                </Column>

                <Column start={1} end={4}>
                    <Row>
                        <Paper>
                            <Centered>
                                <Text variant={"p"}>A</Text>
                            </Centered>
                        </Paper>
                    </Row>
                </Column>
                <Column start={4} end={7}>
                    <Row>
                        <Paper>
                            <Centered>
                                <Text variant={"p"}>B</Text>
                            </Centered>
                        </Paper>
                    </Row>
                </Column>
                <Column start={7} end={13}>
                    <Row>
                        <Paper>
                            <Centered>
                                <Text variant={"p"}>C</Text>
                            </Centered>
                        </Paper>
                    </Row>
                </Column>
            </Grid>
        </Paper>
    );
};

export default GridDemo;
