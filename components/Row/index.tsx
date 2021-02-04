import React from "react";
import styles from "./Row.module.css";

export const Row: React.FC = (props) => {
    return <div className={styles.row}>{props.children}</div>;
};
