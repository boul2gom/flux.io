import {LucideIcon} from "lucide-react";
import React from "react";
import clsx from "clsx";

interface IconProps {
    Icon: LucideIcon,
    size: string,
    stroke?: string,
    border?: boolean,

    bg_color?: string,
    text_color?: string,
    border_color?: string,

    className?: string
}

const Icon: React.FC<IconProps> = ({ Icon, size, stroke = "2", border = false, bg_color, text_color, border_color, className }) => {
    let container_styles = clsx("flex items-center justify-center aspect-square",
        { "rounded-md p-1 border border-2": border },
        { [border_color || ""]: border },
        { [text_color || ""]: !border },
        bg_color, className
    );

    let icon_styles = clsx("aspect-square", text_color);
    const icon = <Icon strokeWidth={stroke} width={size} height={size} className={border ? icon_styles : container_styles} />;

    return border ? (<div className={container_styles}> {icon} </div>) : icon;
}

export default Icon;