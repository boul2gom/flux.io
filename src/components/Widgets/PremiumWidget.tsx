import React from "react";
import Group from "@/components/Group";
import Icon from "@/components/Icon";
import {XIcon} from "lucide-react";
import {Button} from "@nextui-org/react";

const PremiumWidget: React.FC = () => {
    return (
        <Group justify="between" align="center" className="flex-col w-64 h-64 aspect-square bg-gradient-to-br from-base-start to-base-end rounded-3xl border border-white/5 p-4 pb-6">
            <Group justify="between" align="center" className="w-full">
                <span>Special Offer</span>
                <Icon Icon={XIcon} size="20" />
            </Group>

            <Group justify="center" align="center" className="flex-col w-full gap-4">
                <Group justify="between" align="center" className="flex-col w-full gap-3">
                    <Button className="w-full rounded-2xl bg-gradient-to-tr from-accent-start to-accent-end">
                        Upgrade Premium
                    </Button>
                    <p className="font-light text-center text-foreground text-sm">Note that you should switch back to free version after 30 day trial period !</p>
                </Group>

                <Group justify="center" align="center" className="w-full">
                    <span className="font-semibold text-3xl">$1.99</span>
                </Group>
            </Group>
        </Group>
    )
};

export default PremiumWidget;