import type { LocationModule } from "./types";
import { MediaCenterExpertScreen } from "./MediaCenterExpertScreen";
import interiorBg from "../../assets/images/city/locations/poster-square/main.jpg";
import expertSure from "../../assets/images/persons/expert/sure.png";

export const mediaCenterExpertLocation: LocationModule = {
  id: "media-center",
  background: interiorBg,

  getInitialReply: (person) => ({
    image: person.id === "expert" ? expertSure : person.image,
    text: "В Медиацентре мы публикуем новости и лучший экспертный контент\n**Станьте тем, чей контент найдёт отклик у аудитории!**",
  }),

  render: (props) => <MediaCenterExpertScreen {...props} />,
};
