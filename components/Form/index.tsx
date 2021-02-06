import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Form.module.css";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ className, ...rest }) => {
    return (
        <form
            noValidate
            autoComplete={"off"}
            autoCorrect={"off"}
            className={classNames(styles.form, className)}
            {...rest}
        />
    );
};

export default Form;
