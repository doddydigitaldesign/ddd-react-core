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
            <Grid colcount={1}>
                <Row rowIndex={1}>
                    <Column start={1} end={12} colindex={1}>
                        <Text variant={"h1"}>Layout</Text>
                        <Text variant={"h3"}>
                            The Grid, Row and Column components use CSS Grid to
                            simplify different layouts.
                        </Text>
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
                </Row>

                <Grid colcount={3}>
                    <Row rowIndex={2}>
                        <Column colindex={1}>
                            <Paper>
                                <Centered>
                                    <Text variant={"p"}>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Totam, a?
                                    </Text>
                                </Centered>
                            </Paper>
                        </Column>

                        <Column colindex={2}>
                            <Paper>
                                <Centered>
                                    <Text variant={"p"}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sequi nemo saepe
                                        explicabo ad recusandae assumenda
                                        commodi repellendus dolores, eos, ab,
                                        reiciendis ipsam? Ipsum soluta pariatur
                                        veniam laboriosam ea, reprehenderit in
                                        corrupti, assumenda odio dignissimos
                                        repellendus dolor tempora nihil rem
                                        quam?
                                    </Text>
                                </Centered>
                            </Paper>
                        </Column>

                        <Column colindex={3}>
                            <Paper>
                                <Centered>
                                    <Text variant={"p"}>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Architecto deserunt
                                        totam beatae eligendi doloremque libero
                                        accusantium enim, est ducimus voluptas
                                        reiciendis dolor iste corrupti ex
                                        sapiente animi, id ratione quibusdam
                                        vitae dolore tempore consequatur
                                        recusandae autem alias! Blanditiis, quo
                                        dicta dolore, quidem quasi totam cumque
                                        sit sint, obcaecati voluptas quibusdam?
                                    </Text>
                                </Centered>
                            </Paper>
                        </Column>
                    </Row>
                    <Row rowIndex={3}>
                        <Column colindex={1}>
                            <Paper>
                                <Centered>
                                    <Text variant={"p"}>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Architecto deserunt
                                        totam beatae eligendi doloremque libero
                                        accusantium enim, est ducimus voluptas
                                        reiciendis dolor iste corrupti ex
                                        sapiente animi, id ratione quibusdam
                                        vitae dolore tempore consequatur
                                        recusandae autem alias! Blanditiis, quo
                                        dicta dolore, quidem quasi totam cumque
                                        sit sint, obcaecati voluptas quibusdam?
                                    </Text>
                                </Centered>
                            </Paper>
                        </Column>
                    </Row>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default GridDemo;
