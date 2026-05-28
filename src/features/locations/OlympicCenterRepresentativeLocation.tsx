import type { LocationModule } from "./types";
import { OlympicCenterRepresentativeScreen } from "./OlympicCenterRepresentativeScreen";

import representativeMain from "../../assets/images/persons/representative/main.png";

export const olympicCenterRepresentativeLocation: LocationModule = {
  id: "olympic-center",
  getInitialReply: () => ({
    image: representativeMain,
    text: "На платформе есть сервисы для создания вебинаров, тестов и олимпиад. \nВы можете провести все эти активности для студентов вашего вуза. \n**Попробуем «Редактор тестов»?**",
  }),
  render: (props) => <OlympicCenterRepresentativeScreen {...props} />,
};
