import type { LocationModule } from "./types";
import background from "../../assets/images/city/locations/main.jpg";
import { OlympicCenterScreen } from "./OlympicCenterScreen";

export const olympicCenterLocation: LocationModule = {
    id: "olympic-center",
    background,
    getInitialReply: (person) => ({
        image: person.image,
        text: "В Олимпиадном центре каждый год проходит Международная олимпиада по финансовой безопасности",
    }),
    render: (props) => <OlympicCenterScreen {...props} />,
};
