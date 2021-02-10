import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Column,
    Form,
    Grid,
    Input,
    Paper,
    Row,
    Switch,
    Text,
} from "../../../components";

enum FormDemoIds {
    Numeric = "Numeric",
    NoValidation = "NoValidation",
    AwesomeValidator = "AwesomeValidator",
    CheckboxNormal = "CheckboxNormal",
    CheckboxChecked = "CheckboxChecked",
    CheckboxIndeterminate = "CheckboxIndeterminate",
    CheckboxDisabled = "CheckboxDisabled",
    SwitchNormal = "SwitchNormal",
    SwitchActive = "SwitchActive",
    SwitchDisabled = "Switch",
}

const FormDemo: React.FC = () => {
    const [values, setValues] = useState({
        [FormDemoIds.Numeric]: 0,
        [FormDemoIds.NoValidation]: "",
        [FormDemoIds.AwesomeValidator]: "",
        [FormDemoIds.CheckboxNormal]: false,
        [FormDemoIds.CheckboxChecked]: true,
        [FormDemoIds.CheckboxIndeterminate]: "indeterminate",
        [FormDemoIds.CheckboxDisabled]: true,
        [FormDemoIds.SwitchNormal]: false,
        [FormDemoIds.SwitchActive]: true,
        [FormDemoIds.SwitchDisabled]: true,
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
                                    id={FormDemoIds.Numeric}
                                    value={values[FormDemoIds.Numeric]}
                                    label={"Numeric"}
                                    type={"number"}
                                    required
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.NoValidation}
                                    value={values[FormDemoIds.NoValidation]}
                                    label={"No validation"}
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Input
                                    id={FormDemoIds.AwesomeValidator}
                                    value={values[FormDemoIds.AwesomeValidator]}
                                    label={'"Awesome" validator'}
                                    pattern={"Awesome"}
                                    required
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={12}>
                                <Checkbox
                                    label={"Checkbox Normal"}
                                    id={FormDemoIds.CheckboxNormal}
                                    value={values[FormDemoIds.CheckboxNormal]}
                                />
                                <Checkbox
                                    label={"Checkbox Checked"}
                                    id={FormDemoIds.CheckboxChecked}
                                    value={values[FormDemoIds.CheckboxChecked]}
                                />
                                <Checkbox
                                    label={"Checkbox Indeterminate"}
                                    id={FormDemoIds.CheckboxIndeterminate}
                                    value={
                                        values[
                                            FormDemoIds.CheckboxIndeterminate
                                        ] as boolean | "indeterminate"
                                    }
                                />
                                <Checkbox
                                    label={"Checkbox Disabled"}
                                    id={FormDemoIds.CheckboxDisabled}
                                    value={values[FormDemoIds.CheckboxDisabled]}
                                    disabled
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column start={3} end={7}>
                                <Switch
                                    id={FormDemoIds.SwitchNormal}
                                    label={"Switch Normal"}
                                    checked={!!values[FormDemoIds.SwitchNormal]}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            [FormDemoIds.SwitchNormal]: !values[
                                                FormDemoIds.SwitchNormal
                                            ],
                                        });
                                    }}
                                />
                                <Switch
                                    id={FormDemoIds.SwitchActive}
                                    label={"Switch Active"}
                                    checked={values[FormDemoIds.SwitchActive]}
                                    value={values[FormDemoIds.SwitchActive]}
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            [FormDemoIds.SwitchActive]: !values[
                                                FormDemoIds.SwitchActive
                                            ],
                                        });
                                    }}
                                />
                                <Switch
                                    id={FormDemoIds.SwitchDisabled}
                                    label={"Switch Disabled"}
                                    checked={
                                        !!values[FormDemoIds.SwitchDisabled]
                                    }
                                    value={values[FormDemoIds.SwitchActive]}
                                    disabled
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            [FormDemoIds.SwitchDisabled]: !values[
                                                FormDemoIds.SwitchDisabled
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
