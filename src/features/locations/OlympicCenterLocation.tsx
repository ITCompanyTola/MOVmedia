import type { LocationModule } from "./types";
import { OlympicCenterScreen } from "./OlympicCenterScreen";

import studentNodTop from "../../assets/images/persons/student/nod-top.png";
import { StudentOlympicCenterScreen } from "./StudentOlympicCenterScreen";

export const olympicCenterLocation: LocationModule = {
    id: "olympic-center",
    getInitialReply: (person) => ({
        image: person.id === "student" ? studentNodTop : person.image,
        text: "В Олимпиадном центре каждый год проходит Международная Олимпиада по финансовой безопасности",
    }),
    render: (props) => {
        if (props.person.id === "schoolboy") {
            return <OlympicCenterScreen {...props} />;
        }

        if (props.person.id === "student") {
            return <StudentOlympicCenterScreen {...props} />;
        }
    },
};
