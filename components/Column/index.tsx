import React from "react";
import { COLUMN_SIZES } from "../types";

export interface ColumnProps {
    className?: string;
    start?: typeof COLUMN_SIZES[number];
    end?: typeof COLUMN_SIZES[number];
    colindex?: number;
    span?: number;
}

export const Column: React.FC<ColumnProps> = ({
    children,
    start,
    end,
    className,
    colindex,
    span,
}) => {
    return (
        <div
            role={"gridcell"}
            aria-colindex={colindex}
            // className={classNames(
            //     styles.column,
            //     {
            //         [styles["span-1"]]: span === 1,
            //         [styles["span-2"]]: span === 2,
            //         [styles["span-3"]]: span === 3,
            //         [styles["span-4"]]: span === 4,
            //         [styles["span-5"]]: span === 5,
            //         [styles["span-6"]]: span === 6,
            //         [styles["span-7"]]: span === 7,
            //         [styles["span-8"]]: span === 8,
            //         [styles["span-9"]]: span === 9,
            //         [styles["span-10"]]: span === 10,
            //         [styles["span-11"]]: span === 11,
            //         [styles["span-12"]]: span === 12,
            //         [styles["start-1"]]: start === 1,
            //         [styles["start-2"]]: start === 2,
            //         [styles["start-3"]]: start === 3,
            //         [styles["start-4"]]: start === 4,
            //         [styles["start-5"]]: start === 5,
            //         [styles["start-6"]]: start === 6,
            //         [styles["start-7"]]: start === 7,
            //         [styles["start-8"]]: start === 8,
            //         [styles["start-9"]]: start === 9,
            //         [styles["start-10"]]: start === 10,
            //         [styles["start-11"]]: start === 11,
            //         [styles["start-12"]]: start === 12,
            //         [styles["end-1"]]: end === 1,
            //         [styles["end-2"]]: end === 2,
            //         [styles["end-3"]]: end === 3,
            //         [styles["end-4"]]: end === 4,
            //         [styles["end-5"]]: end === 5,
            //         [styles["end-6"]]: end === 6,
            //         [styles["end-7"]]: end === 7,
            //         [styles["end-8"]]: end === 8,
            //         [styles["end-9"]]: end === 9,
            //         [styles["end-10"]]: end === 10,
            //         [styles["end-11"]]: end === 11,
            //         [styles["end-12"]]: end === 12,
            //         [styles["end-13"]]: end === 13,
            //     },
            //     className,
            // )}
        >
            {children}
        </div>
    );
};
