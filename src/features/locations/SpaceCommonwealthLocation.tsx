import { StudentSpaceCommonwealthScreen } from "./StudentSpaceCommonwealthScreen";
import type { LocationModule } from "./types";

export const spaceCommonwealthLocation: LocationModule = {
    id: "space-commonwealth",
    getInitialReply: (person) => ({
        image: person.image,
        text: "В Пространстве Содружества можно подписаться на людей по интересам, читать и комментировать посты\n**Вступай в профессиональные сообщества или создавай собственное**",
    }),
    render: (props) => {
        if (props.person.id === "student") {
            return <StudentSpaceCommonwealthScreen {...props} />;
        }
    },
};
