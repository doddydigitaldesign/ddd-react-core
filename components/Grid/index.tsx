import React from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Grid.module.css";

export interface GridProps {
    className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className }) => {
    return <div className={classNames(styles.grid, className)}>{children}</div>;
};
