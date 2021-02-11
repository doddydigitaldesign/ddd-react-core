import React from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Row.module.css";

export interface RowProps {
    className?: string;
    rowGroup?: boolean;
    rowIndex?: number;
}

export const Row: React.FC<RowProps> = (props) => {
    return (
        <div
            className={classNames(styles.row, props.className)}
            role={props.rowGroup ? "rowgroup" : "row"}
            aria-rowindex={props.rowIndex}
        >
            {props.children}
        </div>
    );
};
