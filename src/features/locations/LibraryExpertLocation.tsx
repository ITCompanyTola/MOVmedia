import type { LocationModule } from "./types";
import { LibraryExpertScreen } from "./LibraryExpertScreen";

export const libraryExpertLocation: LocationModule = {
    id: "library",

    getInitialReply: (person) => ({
        image: person.image,
        text: "В Библиотеке мы храним образовательные материалы. Вы можете не только читать готовые, но и создавать свои. Они попадут в нужную рубрику и будут доступны другим.\n**Нажмите на любую из них, чтобы посмотреть, как это устроено**",
    }),

    render: (props) => <LibraryExpertScreen {...props} />,
};
