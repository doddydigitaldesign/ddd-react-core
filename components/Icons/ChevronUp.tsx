import React, { SVGProps } from "react";

export const ChevronUp = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="m14 11-6-5-6 5v-2l6-5 6 5z" />
        </svg>
    );
};
