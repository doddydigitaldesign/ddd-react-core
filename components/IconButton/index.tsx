import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
    label?: string;
    id?: string;
    icon?: JSX.Element;
}

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    label,
    icon,
    id,
    wrapperProps,
    ...rest
}) => {
    return (
        <div className={classNames(styles.wrapper)} {...wrapperProps}>
            <button
                title={label}
                id={id}
                className={classNames(styles.button, className)}
                {...rest}
            >
                {icon}
            </button>
        </div>
    );
};
