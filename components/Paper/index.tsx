import React, { HTMLAttributes, ReactHTML } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Paper.module.css";

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    raised?: boolean;
    component?: keyof ReactHTML;
}

export const Paper: React.FC<PaperProps> = ({
    className,
    component,
    ...rest
}) => {
    return React.createElement(component ?? "div", {
        className: classNames(styles.paper, className),
        ...rest,
    });
};
