import type { LocationModule } from "./types";
import { PosterSquareScreen } from "./PosterSquareScreen";

export const posterSquareLocation: LocationModule = {
  id: "poster-square",
  getInitialReply: (person) => ({
    image: person.image,
    text: "В Медиацентре мы публикуем новости и лучший экспертный контент \n\n**Станьте тем, чей контент найдёт отклик у аудитории!**",
  }),
  render: (props) => <PosterSquareScreen {...props} />,
};
