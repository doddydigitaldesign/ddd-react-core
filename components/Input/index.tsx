import React, { InputHTMLAttributes, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
    const [validityState, setValidityState] = useState<ValidityState | null>(
        null,
    );

    const checkError = (s?: ValidityState) => {
        const isValid = s
            ? s.valueMissing ||
              s.badInput ||
              s.customError ||
              s.patternMismatch ||
              s.rangeOverflow ||
              s.rangeUnderflow ||
              s.stepMismatch ||
              s.tooLong ||
              s.tooShort
            : false;

        return isValid;
    };

    const validityStateErrorKey =
        validityState && checkError(validityState)
            ? Object.keys(validityState).find(
                  (x) =>
                      validityState[x as keyof typeof validityState] === true,
              )
            : undefined;

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={rest.id}>
                {label}
            </label>
            <input
                title={validityStateErrorKey}
                onChange={(e) => {
                    setValidityState(e.target.validity);
                    if (rest.onChange) {
                        rest.onChange(e);
                    }
                }}
                className={classNames(
                    styles.input,
                    (rest.pattern || rest.type) && {
                        [styles.success]:
                            validityState &&
                            validityState.valid &&
                            !checkError(validityState),
                        [styles.error]:
                            validityState &&
                            !validityState.valid &&
                            checkError(validityState),
                    },
                    className,
                )}
                {...rest}
            />
        </div>
    );
};
