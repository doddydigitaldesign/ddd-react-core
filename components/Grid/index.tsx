import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Grid.module.css";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    colcount?: number;
}

export const Grid: React.FC<GridProps> = ({ className, colcount, ...rest }) => {
    return (
        <div
            aria-colcount={colcount}
            className={classNames(styles.grid, className)}
            role={"grid"}
            {...rest}
        />
    );
};
