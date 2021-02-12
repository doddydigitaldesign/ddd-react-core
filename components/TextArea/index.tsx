import React, { TextareaHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TextArea.module.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    rows?: number;
    maxlength?: number;
    minlength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    id,
    className,
    rows,
    ...rest
}) => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <textarea
                autoComplete={"off"}
                className={styles.textArea}
                rows={rows ?? 8}
                id={id}
                {...rest}
            />
        </div>
    );
};
