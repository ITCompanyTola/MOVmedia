import type { LocationModule } from "./types";
import { AcademyScreen } from "./AcademyScreen";
import { StudentAcademyScreen } from "./StudentAcademyScreen";

export const academyLocation: LocationModule = {
    id: "academy",
    getInitialReply: (person) => ({
        image: person.image,
        text: "В Академии собраны материалы по теме финансовой безопасности и смежным сферам",
    }),
    render: (props) => {
        if (props.person.id === "schoolboy") {
            return <AcademyScreen {...props} />;
        }

        if (props.person.id === "student") {
            return <StudentAcademyScreen {...props} />;
        }
    },
};
