import React from "react";
import clsx from "clsx";

export interface GroupProps {
    justify: "start" | "end" | "center" | "between" | "around";
    align: "start" | "end" | "center" | "stretch";

    className?: string;
    children: React.ReactNode;
}

const justify_styles = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
};
const align_styles = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    stretch: "items-stretch",
};

const Group: React.FC<GroupProps> = ({ justify = "start", align = "start", className, children }) => {
    return (
        <div className={clsx("flex", justify_styles[justify], align_styles[align], className)}>
            {children}
        </div>
    );
};

export default Group;