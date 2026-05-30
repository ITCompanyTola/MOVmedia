import type { LocationModule } from "./types";
import { SpaceCommonwealthScreen } from "./SpaceCommonwealthScreen";
import { SpaceCommonwealthRepresendScreen } from "./SpaceCommonwealthRepresendScreen";
import interiorBg from "../../assets/images/city/locations/space-commonwealth/interior.jpg";
import { StudentSpaceCommonwealthScreen } from "./StudentSpaceCommonwealthScreen";
import expertTalk2 from "../../assets/images/persons/expert/talk-2.png";
import representativeTalk from "../../assets/images/persons/representative/talk.png";

export const spaceCommonwealthLocation: LocationModule = {
    id: "space-commonwealth",
    background: interiorBg,

    getInitialReply: (person) => {
        if (person.id === "representative") {
            return {
                image: representativeTalk,
                text: "Содружество — это место, где участники платформы сами себя проявляют. Они вступают в обсуждения, делятся проектами и ищут наставников",
            };
        }

        if (person.id === "student") {
            return {
                image: person.image,
                text: "В Пространстве Содружества можно подписаться на людей по интересам, читать и комментировать посты \n**Вступай в профессиональные сообщества или создавай собственное**",
            };
        }

        return {
            image: person.id === "expert" ? expertTalk2 : person.image,
            text: "В Пространстве Содружество участники взаимодействуют с вашими материалами: задают вопросы, делятся мнениями, обсуждают",
        };
    },
    render: (props) => {
        if (props.person.id === "representative") {
            return <SpaceCommonwealthRepresendScreen {...props} />;
        }

        if (props.person.id === "student") {
            return <StudentSpaceCommonwealthScreen {...props} />;
        }

        return <SpaceCommonwealthScreen {...props} />;
    },
};
