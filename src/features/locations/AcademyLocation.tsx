import type { LocationModule } from "./types";
import { AcademyScreen } from "./AcademyScreen";

export const academyLocation: LocationModule = {
    id: "academy",
    getInitialReply: (person) => ({
        image: person.image,
        text: "В Академии собраны материалы по теме финансовой безопасности и смежным сферам",
    }),
    render: (props) => <AcademyScreen {...props} />,
};
