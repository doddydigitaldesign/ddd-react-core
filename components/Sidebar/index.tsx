import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import { Paper } from "../index";
import styles from "./Sidebar.module.css";

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <div className={classNames(styles.sidebar, className)} {...rest}>
            <Paper>{children}</Paper>
        </div>
    );
};
