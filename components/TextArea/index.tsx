import React, { TextareaHTMLAttributes, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TextArea.module.css";

interface TextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
    label: string;
    id: string;
    rows?: number;
    value?: string;
    hasValidation?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    id,
    className,
    rows,
    onChange,
    value,
    hasValidation,
    ...rest
}) => {
    const [internalValue, setInternalValue] = useState("");
    return (
        <div className={classNames(styles.wrapper)}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <textarea
                autoComplete={"off"}
                className={classNames(
                    styles.textArea,
                    {
                        [styles.validation]:
                            hasValidation ||
                            rest.required ||
                            typeof rest.maxLength === "number" ||
                            typeof rest.minLength === "number",
                    },
                    className,
                )}
                rows={rows ?? 8}
                id={id}
                value={value ?? internalValue}
                onChange={(e) => {
                    setInternalValue(e.target.value);
                    if (onChange) {
                        onChange(e);
                    }
                }}
                {...rest}
            />
            {(rest.maxLength ?? -1) >= 0 && (
                <span className={classNames(styles.lengthIndicator)}>
                    {(value ?? internalValue).length} / {rest.maxLength}
                </span>
            )}
        </div>
    );
};
