import React from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Grid.module.css";

export interface GridProps {
    className?: string;
    colcount?: number;
}

export const Grid: React.FC<GridProps> = ({
    children,
    className,
    colcount,
}) => {
    return (
        <div
            className={classNames(styles.grid, className)}
            role={"grid"}
            aria-colcount={colcount}
        >
            {children}
        </div>
    );
};
