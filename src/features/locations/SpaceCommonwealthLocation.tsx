import type { LocationModule } from "./types";
import { SpaceCommonwealthScreen } from "./SpaceCommonwealthScreen";

export const spaceCommonwealthLocation: LocationModule = {
  id: "space-commonwealth",
  getInitialReply: (person) => ({
    image: person.image,
    text: "В Пространстве Содружество участники взаимодействуют с вашими материалами: задают вопросы, делятся мнениями, обсуждают",
  }),
  render: (props) => <SpaceCommonwealthScreen {...props} />,
};
