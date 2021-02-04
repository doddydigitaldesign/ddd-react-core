import React from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Grid.module.css";

export interface GridProps {
    centered?: boolean;
    container?: boolean;
}

export const Grid: React.FC<GridProps> = (props) => {
    return (
        <div
            className={classNames(styles.grid, {
                [styles.center]: props.centered,
                [styles.container]: props.container,
            })}
        >
            {props.container && <div />}
            {props.container ? <div>{props.children}</div> : props.children}
            {props.container && <div />}
        </div>
    );
};
