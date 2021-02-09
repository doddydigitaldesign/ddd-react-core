import React, { HTMLAttributes } from "react";
import classNames from "../../lib/utils/classNames";

export interface TableHeadProps extends HTMLAttributes<HTMLElement> {
    caption?: React.ReactNode;
    captionClassName?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
    className,
    children,
    caption,
    captionClassName,
    ...rest
}) => {
    return (
        <thead className={classNames(className)} {...rest}>
            {caption && (
                <caption className={classNames(captionClassName)}>
                    {caption}
                </caption>
            )}
            {children}
        </thead>
    );
};
