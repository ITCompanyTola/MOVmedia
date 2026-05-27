import type { LocationModule } from "./types";
import { GlobalAreaScreen } from "./GlobalAreaScreen";

import schoolboyNodTop from "../../assets/images/persons/schoolboy/not-top.png";

export const globalAreaLocation: LocationModule = {
    id: "global-area",
    getInitialReply: () => ({
        image: schoolboyNodTop,
        text: "**Моё любимое!**\nЭто наше Международное движение, здесь люди из разных стран объединяются вокруг финансовой безопасности",
    }),
    render: (props) => <GlobalAreaScreen {...props} />,
};
