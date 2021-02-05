import React from "react";
import styles from "./Centered.module.css";

export interface CenteredProps {
    horizontalOnly?: boolean;
    verticalOnly?: boolean;
}

export const Centered: React.FC<CenteredProps> = ({
    children,
    horizontalOnly,
    verticalOnly,
}) => {
    return <div className={styles.centered}>{children}</div>;
};

export default Centered;
