import React, { TdHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TableDataCell.module.css";

export interface TableDataCellProps
    extends TdHTMLAttributes<HTMLTableDataCellElement> {
    raised?: boolean;
    title: string;
}

export const TableDataCell: React.FC<TableDataCellProps> = ({
    className,
    title,
    ...rest
}) => {
    return (
        <td
            title={title}
            aria-label={title}
            className={classNames(styles.tableDataCell, className)}
            {...rest}
        />
    );
};
