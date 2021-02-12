import React, { SVGProps } from "react";

export const CircleOutline = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle r={6} cx={8} cy={8} strokeWidth={2} fill={"none"} />
        </svg>
    );
};
