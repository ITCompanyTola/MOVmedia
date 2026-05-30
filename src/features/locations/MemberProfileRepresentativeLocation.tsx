import type { LocationModule } from "./types";
import { MemberProfileRepresentativeScreen } from "./MemberProfileRepresentativeScreen";
import vuzBgPodlozhka from "../../assets/images/city/locations/member-profile/background.png";
import vuzBg from "../../assets/images/city/locations/profile/vuz-bg.png";
import representativeTalk from "../../assets/images/persons/representative/talk.png";

export const memberProfileRepresentativeLocation: LocationModule = {
  id: "member-profile",
  background: vuzBgPodlozhka,
  backgroundComplete: vuzBg,

  getInitialReply: (person) => {
    if (person.id === "representative") {
      return {
        image: representativeTalk,
        text: "Чтобы пользоваться всеми инструментами платформы, **нужно создать личный кабинет вуза и получить расширенный доступ.** \n\nЭто поможет в продвижении вашей организации и привлечении способных студентов",
      };
    }
    return {
      image: person.image,
      text: "Профиль участника — это его витрина на платформе. Здесь виден весь путь: достижения, олимпиады, проекты",
    };
  },

  render: (props) => <MemberProfileRepresentativeScreen {...props} />,
};
