import React from "react";
import {Progress} from "@nextui-org/react";
import Group from "@/components/Group";
import clsx from "clsx";
import {call} from "@/utils/utils";
import Icon from "@/components/Icon";
import {SquareIcon} from "lucide-react";

export type Status = "progress" | "success" | "error" | "paused";

export interface StatusProps {
    status?: Status;
    value?: number;

    className?: string;
}

const statuses = {
    "progress": {
        content: (value: number) => (
            <Progress
                aria-label="Downloading..." size="md" value={value} showValueLabel
                classNames={{
                    indicator: "bg-gradient-to-tr from-accent-start to-accent-end"
                }}
            />
        ),
        styles: undefined
    },
    "success": {
        content: <span>Complete</span>,
        styles: undefined,
    },
    "error": {
        content: <span>Error</span>,
        styles: "text-error"
    },
    "paused": {
        content: <Group align="center" justify="start" className="gap-2">
            <Icon Icon={SquareIcon} size="20" stroke="3" text_color="text-[#8E8E8E]" />
            <span>Paused</span>
        </Group>,
        styles: "text-warning"
    }
};

const FileStatus: React.FC<StatusProps> = ({ status = "progress", value = 0, className }) => {
    const { content, styles } = statuses[status];

    return (
        <Group align="center" justify="start" className={clsx(styles, className)}>
            { call(content, value) }
        </Group>
    )
};

export default FileStatus;