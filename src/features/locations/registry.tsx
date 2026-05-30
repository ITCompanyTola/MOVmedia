import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Text } from "../../components/ui/Text/Text";
import type { LocationData, LocationId, PersonData } from "../../data/data";
import { olympicCenterLocation } from "./OlympicCenterLocation";
import { olympicCenterRepresentativeLocation } from "./OlympicCenterRepresentativeLocation";
import { academyLocation } from "./AcademyLocation";
import type { LocationModule, LocationScreenProps } from "./types";
import { globalAreaLocation } from "./GlobalAreaLocation";
import { careerCenterLocation } from "./CareerCenterLocation";
import { posterSquareLocation } from "./PosterSquareLocation";
import { spaceCommonwealthLocation } from "./SpaceCommonwealthLocation";
import { memberProfileRepresentativeLocation } from "./MemberProfileRepresentativeLocation";
import { mediaCenterExpertLocation } from "./MediaCenterExpertLocation";
import { libraryExpertLocation } from "./LibraryExpertLocation";
import { posterSquareExpertLocation } from "./PosterSquareExpertLocation";
import { memberProfileLocation } from "./MemberProfileLocation";

const modules: Partial<Record<LocationId, LocationModule>> = {
  "olympic-center": olympicCenterLocation,
  academy: academyLocation,
  "global-area": globalAreaLocation,
  "career-center": careerCenterLocation,
  "poster-square": posterSquareLocation,
  "space-commonwealth": spaceCommonwealthLocation,
  "member-profile": memberProfileLocation,
};

const personModules: Partial<
  Record<LocationId, Partial<Record<string, LocationModule>>>
> = {
  "olympic-center": {
    representative: olympicCenterRepresentativeLocation,
  },
  "member-profile": {
    representative: memberProfileRepresentativeLocation,
  },
  "media-center": {
    expert: mediaCenterExpertLocation,
  },
  library: {
    expert: libraryExpertLocation,
  },
  "poster-square": {
    expert: posterSquareExpertLocation,
  },
};

const createPlaceholderModule = (location: LocationData): LocationModule => ({
  id: location.id,
  getInitialReply: (person) => ({
    image: person.image,
    title: "Локация в разработке",
  }),
  render: ({ closeLocation }: LocationScreenProps) => (
    <Card>
      <Text variant="h4">Сценарий скоро появится</Text>
      <Button size="s" onClick={closeLocation}>
        Вернуться на карту
      </Button>
    </Card>
  ),
});

export const getLocationModule = (
  location: LocationData,
  person?: PersonData,
) => {
  const personOverride = person && personModules[location.id]?.[person.id];
  if (personOverride) return personOverride;
  return modules[location.id] ?? createPlaceholderModule(location);
};