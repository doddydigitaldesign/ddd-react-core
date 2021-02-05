import React from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Row.module.css";

export interface RowProps {
    className?: string;
}

export const Row: React.FC<RowProps> = (props) => {
    return (
        <div className={classNames(styles.row, props.className)}>
            {props.children}
        </div>
    );
};
