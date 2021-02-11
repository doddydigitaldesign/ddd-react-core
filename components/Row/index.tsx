import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Row.module.css";

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    rowGroup?: boolean;
    rowIndex?: number;
}

export const Row: React.FC<RowProps> = ({
    className,
    rowGroup,
    rowIndex,
    ...rest
}) => {
    return (
        <div
            aria-rowindex={rowIndex}
            className={classNames(styles.row, className)}
            role={rowGroup ? "rowgroup" : "row"}
            {...rest}
        />
    );
};
