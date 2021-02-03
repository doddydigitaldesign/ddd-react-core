import React from "react";
import classNames from "../lib/utils/classNames";
import styles from "./Button.module.css";

export interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: "success" | "primary" | "error";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
    return (
        <button
            className={classNames(styles.button, styles.primary, {
                [styles.success]: color === "success",
                [styles.error]: color === "error",
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
