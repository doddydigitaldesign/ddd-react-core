import React from "react";
import styles from "./Row.module.css";

const Row: React.FC = (props) => {
    return <div className={styles.row}>{props.children}</div>;
};

export default Row;
