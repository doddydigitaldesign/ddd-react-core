import React, { AnchorHTMLAttributes, useContext } from "react";
import classNames from "../../lib/utils/classNames";
import { NavigationContext } from "../Navigation";
import styles from "./NavigationItem.module.css";

export interface NavigationItemProps extends AnchorHTMLAttributes<HTMLElement> {
    id: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
    className,
    id,
    onClick,
    ...rest
}) => {
    const ctx = useContext(NavigationContext);
    return (
        <div className={classNames(styles.wrapper)}>
            <a
                className={classNames(
                    styles.item,
                    {
                        [styles.active]: !!ctx.state[id],
                    },
                    className,
                )}
                onClick={(e) => {
                    e.preventDefault();
                    ctx.setActiveItem(id);
                    if (onClick) {
                        onClick(e);
                    }
                }}
                color={"error"}
                {...rest}
            />
        </div>
    );
};
