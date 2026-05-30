import { StudentMemberProfileScreen } from "./StudentMemberProfileScreen";
import type { LocationModule } from "./types";

export const memberProfileLocation: LocationModule = {
    id: "member-profile",
    getInitialReply: (person) => ({
        image: person.image,
        text: "**Профиль — это не просто анкета**\nОн помогает рассказать о себе, показать свои интересы и найти тех, с кем у тебя есть что-то общее",
    }),
    render: (props) => {
        if (props.person.id === "student") {
            return <StudentMemberProfileScreen {...props} />;
        }
    },
};
