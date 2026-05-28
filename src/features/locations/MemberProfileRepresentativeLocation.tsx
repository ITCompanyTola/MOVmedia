import type { LocationModule } from "./types";
import { MemberProfileRepresentativeScreen } from "./MemberProfileRepresentativeScreen";
import vuzBgPodlozhka from "../../assets/images/city/locations/profile/vuz-bg-podlozhka.png";
import vuzBg from "../../assets/images/city/locations/profile/vuz-bg.png";

export const memberProfileRepresentativeLocation: LocationModule = {
  id: "member-profile",
  background: vuzBgPodlozhka,
  backgroundComplete: vuzBg,

  getInitialReply: (person) => ({
    image: person.image,
    text: "Профиль участника — это его витрина на платформе. Здесь виден весь путь: достижения, олимпиады, проекты",
  }),

  render: (props) => <MemberProfileRepresentativeScreen {...props} />,
};
