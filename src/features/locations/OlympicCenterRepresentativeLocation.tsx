import type { LocationModule } from "./types";
import { OlympicCenterRepresentativeScreen } from "./OlympicCenterRepresentativeScreen";

import representativeMain from "../../assets/images/persons/representative/main.png";

export const olympicCenterRepresentativeLocation: LocationModule = {
    id: "olympic-center",
    getInitialReply: () => ({
        image: representativeMain,
        text: "Добро пожаловать в Олимпиадный центр! Здесь я покажу вам инструменты для создания олимпиады",
    }),
    render: (props) => <OlympicCenterRepresentativeScreen {...props} />,
};
