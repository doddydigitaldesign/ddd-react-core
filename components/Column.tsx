import React from "react";
import styles from "./Column.module.css";

const Column: React.FC = (props) => {
    return <div className={styles.column}>{props.children}</div>;
};

export default Column;
