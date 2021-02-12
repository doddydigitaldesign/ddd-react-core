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
    TextArea,
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
    SwitchDisabled = "SwitchDisabled",
    TextAreaNormal = "TextAreaNormal",
    TextAreaMaxLength = "TextAreaMaxLength",
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
        [FormDemoIds.TextAreaNormal]: "",
        [FormDemoIds.TextAreaMaxLength]: "",
    });

    const [formValidity, setFormValidity] = useState<boolean>(false);

    return (
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
            <Paper>
                <Grid colcount={1}>
                    <Row rowIndex={1}>
                        <Column start={1} end={12}>
                            <Text variant={"h2"}>Input</Text>
                        </Column>
                    </Row>
                    <Row rowIndex={2}>
                        <Column start={1} end={4} colindex={1}>
                            <Input
                                id={FormDemoIds.Numeric}
                                value={values[FormDemoIds.Numeric]}
                                label={"Numeric"}
                                type={"number"}
                                required
                            />
                        </Column>
                        <Column start={4} end={8} colindex={2}>
                            <Input
                                id={FormDemoIds.NoValidation}
                                value={values[FormDemoIds.NoValidation]}
                                label={"No validation"}
                            />
                        </Column>
                        <Column start={8} end={12} colindex={3}>
                            <Input
                                id={FormDemoIds.AwesomeValidator}
                                value={values[FormDemoIds.AwesomeValidator]}
                                label={'"Awesome" validator'}
                                pattern={"Awesome"}
                                required
                            />
                        </Column>
                    </Row>
                    <Row rowIndex={3}>
                        <Column start={1} end={12}>
                            <Text variant={"h2"}>Checkbox</Text>
                        </Column>
                    </Row>
                    <Row rowIndex={4}>
                        <Column start={1} end={3} colindex={1}>
                            <Checkbox
                                label={"Checkbox Normal"}
                                id={FormDemoIds.CheckboxNormal}
                                value={values[FormDemoIds.CheckboxNormal]}
                            />
                        </Column>
                        <Column start={3} end={6} colindex={2}>
                            <Checkbox
                                label={"Checkbox Checked"}
                                id={FormDemoIds.CheckboxChecked}
                                value={values[FormDemoIds.CheckboxChecked]}
                            />
                        </Column>
                        <Column start={6} end={9} colindex={3}>
                            <Checkbox
                                label={"Checkbox Indeterminate"}
                                id={FormDemoIds.CheckboxIndeterminate}
                                value={
                                    values[
                                        FormDemoIds.CheckboxIndeterminate
                                    ] as boolean | "indeterminate"
                                }
                            />
                        </Column>
                        <Column start={9} end={13} colindex={4}>
                            <Checkbox
                                label={"Checkbox Disabled"}
                                id={FormDemoIds.CheckboxDisabled}
                                value={values[FormDemoIds.CheckboxDisabled]}
                                disabled
                            />
                        </Column>
                    </Row>
                    <Row rowIndex={5}>
                        <Column start={1} end={12}>
                            <Text variant={"h2"}>Switch</Text>
                        </Column>
                    </Row>
                    <Row rowIndex={6}>
                        <Column start={1} end={4} colindex={1}>
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
                        </Column>
                        <Column start={4} end={8} colindex={1}>
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
                        </Column>
                        <Column start={8} end={13} colindex={1}>
                            <Switch
                                id={FormDemoIds.SwitchDisabled}
                                label={"Switch Disabled"}
                                checked={!!values[FormDemoIds.SwitchDisabled]}
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
                    <Row rowIndex={7}>
                        <Column start={1} end={12}>
                            <Text variant={"h2"}>TextArea</Text>
                        </Column>
                    </Row>
                    <Row rowIndex={8}>
                        <Column span={5} colindex={1}>
                            <TextArea
                                label={"TextArea Normal"}
                                id={FormDemoIds.TextAreaNormal}
                            />
                        </Column>
                        <Column span={5} colindex={2}>
                            <TextArea
                                label={"TextArea Max Length"}
                                id={FormDemoIds.TextAreaMaxLength}
                                minLength={5}
                                maxLength={120}
                                required
                            />
                        </Column>
                    </Row>
                    <Row>
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
                    </Row>
                </Grid>
            </Paper>
        </Form>
    );
};

export default FormDemo;
