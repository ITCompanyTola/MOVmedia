import type { LocationModule } from "./types";
import { CareerCenterScreen } from "./CareerCenterScreen";

export const careerCenterLocation: LocationModule = {
    id: "career-center",
    getInitialReply: (person) => ({
        image: person.image,
        text: "Если ты ещё не знаешь, какая профессия в финансовой безопасности тебе подходит, Центр карьеры поможет разобраться",
    }),
    render: (props) => <CareerCenterScreen {...props} />,
};
