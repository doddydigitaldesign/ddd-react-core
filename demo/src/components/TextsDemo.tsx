import React from "react";
import { Paper } from "../../../components";
import { Column } from "../../../components/Column";
import { Grid } from "../../../components/Grid";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";

export const TextDemo: React.FC = () => {
    return (
        <Paper>
            <Grid>
                <Column start={1} end={12}>
                    <Row>
                        <Text variant={"h1"}>Text content</Text>
                        <Text variant={"p"}>
                            The <Text variant={"strong"}>Text</Text> component
                            has reasonable defaults and allows for full
                            customization for those with more advanced
                            use-cases.
                        </Text>
                    </Row>

                    <Row>
                        <Text variant={"h1"}>Heading 1</Text>
                        <Text variant={"h2"}>Heading 2</Text>
                        <Text variant={"h3"}>Heading 3</Text>
                        <Text variant={"h4"}>Heading 4</Text>
                        <Text variant={"h5"}>Heading 5</Text>
                        <Text variant={"h6"}>Heading 6</Text>
                        <Text variant={"p"}>Paragraph</Text>
                        <Text variant={"strong"}>Strong</Text>
                    </Row>
                </Column>
            </Grid>
        </Paper>
    );
};

export default TextDemo;
