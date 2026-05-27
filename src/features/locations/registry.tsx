import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Text } from "../../components/ui/Text/Text";
import type { LocationData, LocationId } from "../../data/data";
import { olympicCenterLocation } from "./OlympicCenterLocation";
import { academyLocation } from "./AcademyLocation";
import type { LocationModule, LocationScreenProps } from "./types";
import { globalAreaLocation } from "./GlobalAreaLocation";

const modules: Partial<Record<LocationId, LocationModule>> = {
    "olympic-center": olympicCenterLocation,
    academy: academyLocation,
    "global-area": globalAreaLocation,
};

const createPlaceholderModule = (location: LocationData): LocationModule => ({
    id: location.id,
    getInitialReply: (person) => ({
        image: person.image,
        title: "Локация в разработке",
    }),
    render: ({ closeLocation }: LocationScreenProps) => (
        <Card>
            <Text variant="h4">Сценарий скоро появится</Text>
            <Button size="s" onClick={closeLocation}>
                Вернуться на карту
            </Button>
        </Card>
    ),
});

export const getLocationModule = (location: LocationData) =>
    modules[location.id] ?? createPlaceholderModule(location);
