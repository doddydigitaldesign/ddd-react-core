import React, { TableHTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import { Paper } from "../Paper";
import styles from "./Table.module.css";

export interface TableProps extends TableHTMLAttributes<HTMLElement> {
    raised?: boolean;
    caption?: React.ReactNode;
    captionClassName?: string;
}

export const Table: React.FC<TableProps> = ({
    className,
    children,
    caption,
    captionClassName,
    ...rest
}) => {
    return (
        <Paper className={styles.wrapper}>
            <table className={classNames(styles.table, className)} {...rest}>
                {caption && (
                    <caption className={classNames(captionClassName)}>
                        {caption}
                    </caption>
                )}
                {children}
            </table>
        </Paper>
    );
};
