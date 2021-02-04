import React from "react";
import styles from "./Paper.module.css";

export interface PaperProps {
    raised?: boolean;
}

export const Paper: React.FC<PaperProps> = (props) => {
    return <div className={styles.paper}>{props.children}</div>;
};
