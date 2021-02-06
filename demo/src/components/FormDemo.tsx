import React, { useState } from "react";
import {
    Column,
    Form,
    Grid,
    Input,
    Paper,
    Row,
    Text,
} from "../../../components";
import { FormValues } from "../../../components/types";

enum FormDemoIds {
    Input1 = "Input1",
    Input2 = "Input2",
    Input3 = "Input3",
}

const FormDemo: React.FC = () => {
    const [values, setValues] = useState<FormValues<FormDemoIds>>({
        [FormDemoIds.Input1]: "",
        [FormDemoIds.Input2]: "",
        [FormDemoIds.Input3]: "",
    });

    const [formValidity, setFormValidity] = useState<boolean>(false);

    return (
        <Paper>
            <Grid>
                <Row>
                    <Column start={1} end={12}>
                        <Text variant={"h1"}>Forms</Text>
                    </Column>
                    <Column start={1} end={12}>
                        <Text variant={"h3"}>Values</Text>
                        <ul>
                            <li>
                                {FormDemoIds.Input1}:{" "}
                                {values[FormDemoIds.Input1]}
                            </li>
                            <li>
                                {FormDemoIds.Input2}:{" "}
                                {values[FormDemoIds.Input2]}
                            </li>
                            <li>
                                {FormDemoIds.Input3}:{" "}
                                {values[FormDemoIds.Input3]}
                            </li>
                            <li>Form is valid: {formValidity.toString()}</li>
                        </ul>
                    </Column>
                </Row>
                <Form
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        setValues({ ...values, [target.id]: target.value });
                        setFormValidity(e.currentTarget.checkValidity());
                    }}
                    id={"FormDemo"}
                >
                    <Row>
                        <Column start={3} end={7}>
                            <Input
                                id={FormDemoIds.Input1}
                                value={values[FormDemoIds.Input1]}
                                label={FormDemoIds.Input1}
                                pattern={"[5]{1}"}
                                required
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column start={3} end={7}>
                            <Input
                                id={FormDemoIds.Input2}
                                value={values[FormDemoIds.Input2]}
                                label={FormDemoIds.Input2}
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column start={3} end={7}>
                            <Input
                                id={FormDemoIds.Input3}
                                value={values[FormDemoIds.Input3]}
                                label={FormDemoIds.Input3}
                                pattern={"Awesome"}
                                required
                            />
                        </Column>
                    </Row>
                </Form>
            </Grid>
        </Paper>
    );
};

export default FormDemo;
