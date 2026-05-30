import type { LocationModule } from "./types";
import { PosterSquareExpertScreen } from "./PosterSquareExpertScreen";
import expertSure from "../../assets/images/persons/expert/sure.png";

export const posterSquareExpertLocation: LocationModule = {
  id: "poster-square",

  getInitialReply: (person) => ({
    image: person.id === "expert" ? expertSure : person.image,
    text: "На Афишной площади публикуют профессиональные события. \n\nЗдесь можно не только найти мероприятие для участия, но и предложить себя в качестве спикера. \n\nУдобные фильтры помогут отобрать события по вашей теме, чтобы не тратить время на поиск",
  }),

  render: (props) => <PosterSquareExpertScreen {...props} />,
};
