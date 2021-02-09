import React, { useState } from "react";
import {
    Button,
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
    Input4 = "Input4",
}

const FormDemo: React.FC = () => {
    const [values, setValues] = useState<FormValues<FormDemoIds>>({
        [FormDemoIds.Input1]: "",
        [FormDemoIds.Input2]: "",
        [FormDemoIds.Input3]: "",
        [FormDemoIds.Input4]: false,
    });

    const [formValidity, setFormValidity] = useState<boolean>(false);

    return (
        <Paper>
            <Grid>
                <Row>
                    <Column start={1} end={12}>
                        <Text variant={"h1"}>Forms</Text>
                    </Column>
                </Row>
                <Column start={1} end={6}>
                    <Form
                        onChange={(e) => {
                            const target = e.target as HTMLInputElement;
                            setValues({
                                ...values,
                                [target.id]:
                                    target.type === "checkbox"
                                        ? target.checked
                                        : target.value,
                            });
                            setFormValidity(e.currentTarget.checkValidity());
                        }}
                        id={"FormDemo"}
                    >
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.Input1}
                                    value={values[FormDemoIds.Input1]}
                                    label={"Numeric"}
                                    type={"number"}
                                    required
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.Input2}
                                    value={values[FormDemoIds.Input2]}
                                    label={"No validation"}
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.Input3}
                                    value={values[FormDemoIds.Input3]}
                                    label={'"Awesome" validator'}
                                    pattern={"Awesome"}
                                    required
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.Input4}
                                    label={"Checkbox"}
                                    checked={!!values[FormDemoIds.Input4]}
                                    onClick={(e) => {
                                        setValues({
                                            ...values,
                                            [FormDemoIds.Input4]: !values[
                                                FormDemoIds.Input4
                                            ],
                                        });
                                    }}
                                    type={"checkbox"}
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={1} end={13}>
                                <Button
                                    onClick={(e) => {
                                        alert("Form validity: " + formValidity);
                                    }}
                                >
                                    Submit
                                </Button>
                            </Column>
                        </Row>
                    </Form>
                </Column>
                <Column start={6} end={13}>
                    <Text variant={"p"}>
                        Form Validity: {formValidity ? "✅" : "❌"}
                    </Text>
                </Column>
            </Grid>
        </Paper>
    );
};

export default FormDemo;
