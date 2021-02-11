import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import { COLUMN_SIZES } from "../types";

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    start?: typeof COLUMN_SIZES[number];
    end?: typeof COLUMN_SIZES[number];
    colindex?: number;
    span?: number;
}

export const Column: React.FC<ColumnProps> = ({
    colindex,
    className,
    ...rest
}) => {
    return (
        <div
            aria-colindex={colindex}
            className={classNames(className)}
            role={"gridcell"}
            {...rest}
        />
    );
};
