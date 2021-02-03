import React from "react";
import classNames from "../lib/utils/classNames";
import styles from "./Grid.module.css";

export interface GridProps {
    centered?: boolean;
}

const Grid: React.FC<GridProps> = (props) => {
    return (
        <div
            className={classNames(styles.grid, {
                [styles.center]: props.centered,
            })}
        >
            {props.children}
        </div>
    );
};

export default Grid;
