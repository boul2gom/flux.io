import React from "react";
import Group from "@/components/Group";
import {Checkbox} from "@nextui-org/react";
import FileStatus, { Status } from "@/components/File/FileStatus";
import clsx from "clsx";
import {PaperclipIcon} from "lucide-react";
import Icon from "@/components/Icon";

export interface InfoProps {
    name: string;
    size: string;
    status: Status;

    time_left: string;
    last_modification: string;
}

const FileInfo: React.FC<InfoProps> = ({ name, size, status, time_left, last_modification }) => {
    let styles = clsx("after:bg-gradient-to-tr after:from-accent-start after:to-accent-end",
        "group-data-[selected=true]:after:bg-gradient-to-tr",
        "group-data-[selected=true]:after:from-accent-start",
        "group-data-[selected=true]:after:to-accent-end"
    );

    let file_type = "Unknown";

    return (
        <Group justify="between" align="center" className="w-full p-3">
            <Group justify="between" align="center" className="gap-2">
                <Checkbox size="md" radius="sm" className="m-0" classNames={{ wrapper: styles }} />

                <Group justify="center" align="center" className="gap-2">
                    <Icon Icon={PaperclipIcon} size="20" />

                    <Group justify="start" align="center" className="flex-col">
                        <p className="text-sm font-medium">{name}</p>
                        <p className="text-xs text-[#8E8E8E]">{file_type}</p>
                    </Group>
                </Group>
            </Group>

            <Group justify="between" align="center" className="gap-4">
                <p className="w-24 text-xs text-[#8E8E8E]">{size}</p>
                <FileStatus status={status} value={20} className="w-64 h-11" />

                <p className="w-20 text-xs text-[#8E8E8E]">{time_left}</p>
                <p className="w-24 text-xs text-[#8E8E8E]">{last_modification}</p>
            </Group>
        </Group>
    );
};

export default FileInfo;