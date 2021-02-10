import React, { ButtonHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: "success" | "primary" | "error";
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    color,
    className,
    ...rest
}) => {
    return (
        <button
            className={classNames(
                styles.button,
                styles.primary,
                {
                    [styles.success]: color === "success",
                    [styles.error]: color === "error",
                },
                className,
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};
