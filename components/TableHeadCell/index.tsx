import React, { ThHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TableHeadCell.module.css";

export interface TableHeadCellProps
    extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    raised?: boolean;
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    className,
    ...rest
}) => {
    return (
        <th
            role="columnheader"
            scope="col"
            className={classNames(styles.tableHeadCell, className)}
            {...rest}
        />
    );
};
