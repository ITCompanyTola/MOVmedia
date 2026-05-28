import type { LocationModule } from "./types";
import { GlobalAreaScreen } from "./GlobalAreaScreen";

import schoolboyNodTop from "../../assets/images/persons/schoolboy/not-top.png";
import { StudentGlobalAreaScreen } from "./StudentGlobalAreaScreen";

export const globalAreaLocation: LocationModule = {
    id: "global-area",
    getInitialReply: (person) => ({
        image: person.id === "schoolboy" ? schoolboyNodTop : person.image,
        text: "**Моё любимое!**\nЭто наше Международное движение, здесь люди из разных стран объединяются вокруг финансовой безопасности",
    }),
    render: (props) => {
        if (props.person.id === "schoolboy") {
            return <GlobalAreaScreen {...props} />;
        }

        if (props.person.id === "student") {
            return <StudentGlobalAreaScreen {...props} />;
        }
    },
};
