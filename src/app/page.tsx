import FileContextMenu from "@/components/File/FileContextMenu";
import FileStatus from "@/components/File/FileStatus";
import PremiumWidget from "@/components/Widgets/PremiumWidget";
import FileInfo from "@/components/File/FileInfo";

export default function Home() {
    return (
        <div>
            <FileInfo name="File.png" size="1.2 Mb" status="progress" time_left="0s" last_modification="Today, 12:30 PM" />
        </div>
    );
}
