import React, { InputHTMLAttributes, useRef, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Input.module.css";
export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
    label: string;
    id: string;
    value?: string | ReadonlyArray<string> | number | boolean;
}

export const Input: React.FC<InputProps> = ({
    label,
    className,
    value,
    checked,
    ...rest
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const checkMark = (
        <svg
            className={classNames(styles.checkMark, {
                [styles.checkMarkVisible]: checked,
                [styles.checkMarkHidden]: !checked,
            })}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={() => {
                if (ref.current) {
                    ref.current.click();
                }
            }}
        >
            {checked ? (
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            ) : (
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
            )}
        </svg>
    );

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
                checked={rest.type === "checkbox" ? checked : undefined}
                value={typeof value === "string" ? value : undefined}
                {...rest}
            />
            {rest.type === "checkbox" && checkMark}
        </div>
    );
};
