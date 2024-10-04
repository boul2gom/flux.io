"use client";

import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import {by_field, filer_by_field} from "@/utils/utils";
import {
    ClipboardCopy,
    ClipboardIcon,
    CopyPlus,
    FileClock,
    FileDown,
    FileIcon,
    FileInput,
    FilePen, FilesIcon,
    FolderOpen, InfoIcon,
    LucideIcon, PackageIcon, PackageOpen, RefreshCw,
    SquareIcon, SquareMIcon, SquareMinus,
    TrashIcon
} from "lucide-react";
import Icon from "@/components/Icon";
import clsx from "clsx";

export interface ContextMenuProps {
    children: React.ReactNode
}

type Item = { label: string, category: Category, icon: LucideIcon, shortcut?: string, disabled?: boolean, action: () => void, styles?: string };
type Category = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

const items: Record<string, Item> = {
    "open": {
        label: "Open",
        category: "1",
        icon: FileIcon,
        shortcut: "⌘O",
        action: () => console.log("Open")
    },
    "open-with": {
        label: "Open With",
        category: "1",
        icon: FileInput,
        action: () => console.log("Open With")
    },
    "open-folder": {
        label: "Open Folder",
        category: "1",
        icon: FolderOpen,
        shortcut: "⌘⇧O",
        action: () => console.log("Open Folder")
    },
    "pause-download": {
        label: "Pause Download",
        category: "2",
        icon: FileClock,
        action: () => console.log("Pause Download")
    },
    "resume-download": {
        label: "Resume Download",
        category: "2",
        icon: FileDown,
        action: () => console.log("Resume Download")
    },
    "restart-download": {
        label: "Restart Download",
        category: "3",
        icon: RefreshCw,
        action: () => console.log("Restart Download")
    },
    "stop-download": {
        label: "Stop Download",
        category: "3",
        icon: SquareIcon,
        action: () => console.log("Stop Download"),
        styles: "text-error data-[hover=true]:bg-error data-[hover=true]:text-white"
    },
    "add-to-queue": {
        label: "Add to Queue",
        category: "4",
        icon: CopyPlus,
        action: () => console.log("Add to Queue")
    },
    "delete-from-queue": {
        label: "Delete from Queue",
        category: "4",
        icon: SquareMinus,
        action: () => console.log("Delete from Queue"),
    },
    "copy": {
        label: "Copy",
        category: "5",
        icon: ClipboardIcon,
        shortcut: "⌘C",
        action: () => console.log("Copy")
    },
    "cut": {
        label: "Cut",
        category: "5",
        icon: ClipboardCopy,
        shortcut: "⌘X",
        action: () => console.log("Cut")
    },
    "duplicate": {
        label: "Duplicate",
        category: "5",
        icon: FilesIcon,
        shortcut: "⌘D",
        action: () => console.log("Duplicate")
    },
    "compress": {
        label: "Compress",
        category: "6",
        icon: PackageIcon,
        action: () => console.log("Compress")
    },
    "extract": {
        label: "Extract",
        category: "6",
        icon: PackageOpen,
        action: () => console.log("Extract")
    },
    "move-rename": {
        label: "Move/Rename",
        category: "7",
        icon: FilePen,
        shortcut: "⌘⇧M",
        action: () => console.log("Move/Rename")
    },
    "delete": {
        label: "Delete",
        category: "7",
        icon: TrashIcon,
        shortcut: "⌘⌫",
        action: () => console.log("Delete"),
        styles: "text-error data-[hover=true]:bg-error data-[hover=true]:text-white"
    },
    "properties": {
        label: "Properties",
        category: "8",
        icon: InfoIcon,
        shortcut: "⌘I",
        action: () => console.log("Properties")
    }
};

const items_by_category = by_field<Item, "category", Category>(items, "category");
const categories_index = Object.entries(items_by_category).length;

const FileContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
    const disabled_keys = filer_by_field(items, "disabled", true);

    const [visible, setVisible] = React.useState(false);
    const [disabled, setDisabled] = React.useState(Object.keys(disabled_keys));

    const handle_menu = (e: React.MouseEvent) => {
        e.preventDefault();
        setVisible(true);
    }

    return (
        <Dropdown isOpen={visible} onClose={() => setVisible(false)} showArrow backdrop="opaque" classNames={{
            content: "w-72 bg-gradient-to-br from-base-start to-base-end",
        }}>
            <DropdownTrigger onContextMenu={handle_menu}>
                { children }
            </DropdownTrigger>
            <DropdownMenu aria-label="File Context Menu" variant="flat" disabledKeys={disabled}>
                {Object.entries(items_by_category).map(([category, items], index) => (
                    <DropdownSection key={category} showDivider={index < categories_index - 1}>
                        {items.map(item => (
                            <DropdownItem key={item.label} onClick={item.action} color="default" className={clsx("gap-4", item.styles)}
                                shortcut={item.shortcut} startContent={<Icon Icon={item.icon} size="20" />}
                            >
                                {item.label}
                            </DropdownItem>
                        ))}
                    </DropdownSection>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default FileContextMenu;