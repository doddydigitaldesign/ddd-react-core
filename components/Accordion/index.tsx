import React, { HTMLAttributes, SyntheticEvent } from "react";
import classNames from "../../lib/utils/classNames";
import { Paper } from "../Paper";
import styles from "./Accordion.module.css";

export interface AccordionProps extends HTMLAttributes<HTMLDetailsElement> {
    className?: string;
    summaryProps: HTMLAttributes<HTMLElement> & { children: React.ReactNode };
    open?: boolean;
    onToggle?: (e: SyntheticEvent<HTMLElement, Event>) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
    summaryProps,
    ...props
}) => {
    return (
        <details
            className={classNames(styles.details, props.className)}
            open={props.open || undefined}
            onToggle={props.onToggle}
            {...props}
        >
            <summary
                className={classNames(styles.summary, summaryProps.className)}
                {...summaryProps}
            >
                {summaryProps.children}
                <div className={styles.marker}>
                    <i className={"material-icons"}>
                        {props.open ? "expand_less" : "expand_more"}
                    </i>
                </div>
            </summary>
            <Paper>{props.children}</Paper>
        </details>
    );
};
