import type { LocationModule } from "./types";
import { SpaceCommonwealthScreen } from "./SpaceCommonwealthScreen";
import { SpaceCommonwealthRepresendScreen } from "./SpaceCommonwealthRepresendScreen";
import interiorBg from "../../assets/images/city/locations/space-commonwealth/interior.jpg";

export const spaceCommonwealthLocation: LocationModule = {
  id: "space-commonwealth",
  background: interiorBg,

  getInitialReply: (person) => {
    if (person.id === "representative") {
      return {
        image: person.image,
        text: "Содружество — это место, где участники платформы сами себя проявляют. Они вступают в обсуждения, делятся проектами и ищут наставников",
      };
    }
    return {
      image: person.image,
      text: "В Пространстве Содружество участники взаимодействуют с вашими материалами: задают вопросы, делятся мнениями, обсуждают",
    };
  },
  render: (props) => {
    if (props.person.id === "representative") {
      return <SpaceCommonwealthRepresendScreen {...props} />;
    }

    return <SpaceCommonwealthScreen {...props} />;
  },
};
