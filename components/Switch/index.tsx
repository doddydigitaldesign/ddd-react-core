import React, { InputHTMLAttributes, useRef, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Switch.module.css";

export interface SwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
    label: string;
    id: string;
    value?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
    value,
    label,
    onChange,
    onFocus,
    onBlur,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const active = ref.current?.checked ?? false;

    const disabled = (
        <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="20" rx="10" fill="#C8C6C4" />
            <circle cx="30" cy="10" r="6" fill="#F3F2F1" />
        </svg>
    );

    const on = (
        <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.svg)}
            onClick={() => {
                if (ref.current) {
                    ref.current.click();
                }
            }}
        >
            {active ? (
                <>
                    <rect
                        className={classNames(styles.rectActive, {
                            [styles.rectActiveFocused]: isFocused,
                        })}
                        width="40"
                        height="20"
                        rx="10"
                        fill="#106EBE"
                    />
                    <circle
                        className={classNames(styles.toggleKnobActive, {
                            [styles.toggleKnobActiveFocused]: isFocused,
                        })}
                        cx="30"
                        cy="10"
                        r="6"
                        fill="white"
                    />
                </>
            ) : (
                <>
                    <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="19"
                        rx="9.5"
                        fill="white"
                    />
                    <circle
                        className={classNames(styles.toggleKnob, {
                            [styles.toggleKnobFocused]: isFocused,
                        })}
                        cx="10"
                        cy="10"
                        r="6"
                        fill="#201F1E"
                    />
                    <rect
                        className={classNames(styles.rect, {
                            [styles.rectFocused]: isFocused,
                        })}
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="19"
                        rx="9.5"
                        stroke="#323130"
                    />
                </>
            )}
        </svg>
    );

    return (
        <div className={styles.wrapper}>
            <input
                ref={ref}
                type="checkbox"
                className={styles.switch}
                value={value?.toString()}
                onFocus={(e) => {
                    console.log("Focused Switch:", e);
                    setIsFocused(true);
                    if (onFocus) {
                        onFocus(e);
                    }
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    if (onBlur) {
                        onBlur(e);
                    }
                }}
                onChange={(e) => {
                    if (onChange) {
                        onChange(e);
                    }
                }}
                {...rest}
            />
            {rest.disabled ? disabled : on}
            <label className={styles.label} htmlFor={rest.id}>
                {label}
            </label>
        </div>
    );
};
