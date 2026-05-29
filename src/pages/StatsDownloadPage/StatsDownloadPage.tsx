import { useEffect } from "react";
import { downloadStatsFile } from "../../utils/gameStats";

export function StatsDownloadPage() {
    useEffect(() => {
        downloadStatsFile();
    }, []);

    return <div>Скачивание статистики...</div>;
}
