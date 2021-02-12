import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";

export interface TableHeadProps extends HTMLAttributes<HTMLElement> {}

export const TableHead: React.FC<TableHeadProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <thead className={classNames(className)} {...rest}>
            {children}
        </thead>
    );
};
