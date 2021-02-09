import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./TableHead.module.css";

export interface TableHeadProps extends HTMLAttributes<HTMLElement> {
    caption?: React.ReactNode;
    captionClassName?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
    className,
    children,
    caption,
    captionClassName,
    ...rest
}) => {
    return (
        <thead className={classNames(styles.tableHead, className)} {...rest}>
            {caption && (
                <caption
                    className={classNames(styles.caption, captionClassName)}
                >
                    {caption}
                </caption>
            )}
            {children}
        </thead>
    );
};
