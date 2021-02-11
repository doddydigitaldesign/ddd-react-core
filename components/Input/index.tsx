import React, { InputHTMLAttributes, useRef, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Input.module.css";
export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "checked"> {
    label: string;
    id: string;
    value?: string | number;
}

export const Input: React.FC<InputProps> = ({
    label,
    className,
    value,
    ...rest
}) => {
    const ref = useRef<HTMLInputElement>(null);

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
                ref={ref}
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
                value={value}
                {...rest}
            />
        </div>
    );
};
