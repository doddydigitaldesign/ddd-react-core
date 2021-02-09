import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TableBody.module.css";

export interface TableBodyProps extends HTMLAttributes<HTMLElement> {
    raised?: boolean;
}

export const TableBody: React.FC<TableBodyProps> = ({ className, ...rest }) => {
    return (
        <tbody className={classNames(styles.tableBody, className)} {...rest} />
    );
};
