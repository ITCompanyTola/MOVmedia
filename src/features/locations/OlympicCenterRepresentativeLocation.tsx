import type { LocationModule } from "./types";
import { OlympicCenterRepresentativeScreen } from "./OlympicCenterRepresentativeScreen";

import representativeTalk from "../../assets/images/persons/representative/talk.png";

export const olympicCenterRepresentativeLocation: LocationModule = {
  id: "olympic-center",
  getInitialReply: (person) => ({
    image: person.id === "representative" ? representativeTalk : person.image,
    text: "На платформе есть сервисы для создания вебинаров, тестов и олимпиад. \nВы можете провести все эти активности для студентов вашего вуза. \n**Попробуем «Редактор тестов»?**",
  }),
  render: (props) => <OlympicCenterRepresentativeScreen {...props} />,
};
