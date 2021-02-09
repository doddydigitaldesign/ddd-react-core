import React, { TableHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Table.module.css";

export interface TableProps extends TableHTMLAttributes<HTMLElement> {
    raised?: boolean;
}

export const Table: React.FC<TableProps> = ({ className, ...rest }) => {
    return <table className={classNames(styles.table, className)} {...rest} />;
};
