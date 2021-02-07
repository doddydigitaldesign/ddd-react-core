import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Paper.module.css";

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    raised?: boolean;
}

export const Paper: React.FC<PaperProps> = ({ className, ...rest }) => {
    return <div className={classNames(styles.paper, className)} {...rest} />;
};
