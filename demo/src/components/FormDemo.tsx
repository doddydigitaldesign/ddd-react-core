import React, { useState } from "react";
import {
    Button,
    Column,
    Form,
    Grid,
    Input,
    Paper,
    Row,
    Switch,
    Text,
} from "../../../components";
import { FormValues } from "../../../components/types";

enum FormDemoIds {
    Input1 = "Numeric",
    Input2 = "NoValidation",
    Input3 = "AwesomeValidator",
    Input4 = "Checkbox",
    Input5 = "Switch",
}

const FormDemo: React.FC = () => {
    const [values, setValues] = useState<FormValues<FormDemoIds>>({
        [FormDemoIds.Input1]: "",
        [FormDemoIds.Input2]: "",
        [FormDemoIds.Input3]: "",
        [FormDemoIds.Input4]: false,
        [FormDemoIds.Input5]: false,
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
                                    onClick={() => {
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
                            <Column start={3} end={7}>
                                <Switch
                                    id={FormDemoIds.Input5}
                                    label={"Switch"}
                                    checked={!!values[FormDemoIds.Input5]}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            [FormDemoIds.Input5]: !values[
                                                FormDemoIds.Input5
                                            ],
                                        });
                                    }}
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={1} end={13}>
                                <Button
                                    disabled={!formValidity}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert(
                                            "Form validity: " +
                                                formValidity +
                                                "\nValues: \n" +
                                                Object.entries(values)
                                                    .map(
                                                        ([key, value]) =>
                                                            `${key}: ${value}\n`,
                                                    )
                                                    .join(""),
                                        );
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
