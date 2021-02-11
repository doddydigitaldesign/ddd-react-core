import React, { InputHTMLAttributes, useRef, useState } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
    label: string;
    id: string;
    value?: boolean | "indeterminate";
}

export const Checkbox: React.FC<CheckboxProps> = ({
    value,
    label,
    onChange,
    onFocus,
    onBlur,
    ...rest
}) => {
    const isIndeterminate = value === "indeterminate";
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const checked = (ref.current?.checked ?? false) || value === true;

    const disabledSvg = (
        <svg
            className={styles.svgDisabled}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
                if (ref.current) {
                    ref.current.click();
                }
            }}
        >
            {checked ? (
                <>
                    <rect width="20" height="20" rx="2" fill="#C8C6C4" />
                    <path
                        d="M16.3516 6.35156L8 14.7109L3.64844 10.3516L4.35156 9.64844L8 13.2891L15.6484 5.64844L16.3516 6.35156Z"
                        fill="white"
                    />
                </>
            ) : (
                <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="1.5"
                    stroke="#C8C6C4"
                />
            )}
        </svg>
    );

    const indeterminateSvg = (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
            onClick={() => {
                if (ref.current) {
                    ref.current.click();
                }
            }}
        >
            {rest.disabled ? (
                <>
                    <rect
                        x="5"
                        y="5"
                        width="10"
                        height="10"
                        rx="2"
                        fill="#C8C6C4"
                    />
                    <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        rx="1.5"
                        stroke="#C8C6C4"
                    />
                </>
            ) : (
                <>
                    <rect
                        x="5"
                        y="5"
                        width="10"
                        height="10"
                        rx="2"
                        fill="#0078D4"
                        className={classNames(styles.rectActive, {
                            [styles.rectActiveFocused]: isFocused,
                        })}
                    />
                    <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        rx="1.5"
                        stroke="#0078D4"
                    />
                </>
            )}
        </svg>
    );

    const normalSvg = (
        <svg
            className={styles.svg}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
                if (ref.current) {
                    ref.current.click();
                }
            }}
        >
            {checked ? (
                <>
                    <rect
                        className={classNames(styles.rectActive, {
                            [styles.rectActiveFocused]: isFocused,
                        })}
                        width="20"
                        height="20"
                        rx="2"
                        fill="#0078D4"
                    />
                    <path
                        d="M16.3516 6.35156L8 14.7109L3.64844 10.3516L4.35156 9.64844L8 13.2891L15.6484 5.64844L16.3516 6.35156Z"
                        fill="white"
                    />
                </>
            ) : (
                <>
                    {isFocused ? (
                        <>
                            <path
                                d="M16.3516 6.35156L8 14.7109L3.64844 10.3516L4.35156 9.64844L8 13.2891L15.6484 5.64844L16.3516 6.35156Z"
                                fill="#605E5C"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="19"
                                height="19"
                                rx="1.5"
                                stroke="#323130"
                                className={classNames(styles.rect, {
                                    [styles.rectFocused]: isFocused,
                                })}
                            />
                        </>
                    ) : (
                        <>
                            <rect
                                x="0.5"
                                y="0.5"
                                width="19"
                                height="19"
                                rx="1.5"
                                stroke="#323130"
                                className={classNames(styles.rect, {
                                    [styles.rectFocused]: isFocused,
                                })}
                            />
                            <path
                                d="M16.3516 6.35156L8 14.7109L3.64844 10.3516L4.35156 9.64844L8 13.2891L15.6484 5.64844L16.3516 6.35156Z"
                                fill="white"
                                className={classNames(styles.checkMark)}
                            />
                        </>
                    )}
                </>
            )}
        </svg>
    );

    return (
        <div className={styles.wrapper}>
            <input
                ref={ref}
                type="checkbox"
                className={styles.checkbox}
                value={value?.toString()}
                onFocus={(e) => {
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
            {rest.disabled
                ? disabledSvg
                : isIndeterminate
                ? indeterminateSvg
                : normalSvg}
            <label className={styles.label} htmlFor={rest.id}>
                {label}
            </label>
        </div>
    );
};
