import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import { Paper } from "../Paper";
import styles from "./TableRow.module.css";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    raised?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <Paper
            component={"tr"}
            className={classNames(styles.tableRow, className)}
            {...rest}
        >
            {children}
        </Paper>
    );
};
