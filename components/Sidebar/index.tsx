import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Sidebar.module.css";

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = ({ className, ...rest }) => {
    return <div className={classNames(styles.sidebar, className)} {...rest} />;
};
