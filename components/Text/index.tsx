import React, { ReactHTML } from "react";
import classNames from "../../lib/utils/classNames";
import styles from "./Text.module.css";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: keyof ReactHTML;
}

export const Text: React.FC<TextProps> = (props) => {
    return React.createElement<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    >(
        props.variant ?? "p",
        {
            className: classNames(styles.text),
        },
        props.children,
    );
};
