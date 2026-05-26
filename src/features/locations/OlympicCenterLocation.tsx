import type { LocationModule } from "./types";
import { OlympicCenterScreen } from "./OlympicCenterScreen";

export const olympicCenterLocation: LocationModule = {
    id: "olympic-center",
    getInitialReply: (person) => ({
        image: person.image,
        text: "В Олимпиадном центре каждый год проходит Международная олимпиада по финансовой безопасности",
    }),
    render: (props) => <OlympicCenterScreen {...props} />,
};
