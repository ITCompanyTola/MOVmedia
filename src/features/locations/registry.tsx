import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Text } from "../../components/ui/Text/Text";
import type { LocationData, LocationId } from "../../data/data";
import background from "../../assets/images/city/locations/main.jpg";
import { olympicCenterLocation } from "./OlympicCenterLocation";
import type { LocationModule, LocationScreenProps } from "./types";

const modules: Partial<Record<LocationId, LocationModule>> = {
    "olympic-center": olympicCenterLocation,
};

const createPlaceholderModule = (location: LocationData): LocationModule => ({
    id: location.id,
    background,
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
