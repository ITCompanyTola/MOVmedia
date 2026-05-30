import type { LocationModule } from "./types";

import studentSpeak from "../../assets/images/persons/student/speak.png";
import { StudentPosterSquareScreen } from "./StudentPosterSquareScreen";

export const posterSquareLocation: LocationModule = {
    id: "poster-square",
    getInitialReply: (person) => ({
        image: person.id === "student" ? studentSpeak : person.image,
        text: "На Афишной площади собраны все анонсы мероприятий Содружества. Воркшопы, форумы, вебинары проходят каждый месяц",
    }),
    render: (props) => {
        if (props.person.id === "student") {
            return <StudentPosterSquareScreen {...props} />;
        }
    },
};
