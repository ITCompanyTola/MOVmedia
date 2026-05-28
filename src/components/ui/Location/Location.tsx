import clsx from "clsx";
import styles from "./Location.module.css";
import { useAppStore } from "../../../store/useAppStore";
import data, {
    type LocationData,
    type PersonData,
    type ReplyData,
} from "../../../data/data";
import { Text } from "../Text/Text";
import { useEffect, useState } from "react";
import { Reply } from "../Reply/Reply";
import { getLocationModule } from "../../../features/locations/registry";
import type { LocationBackgroundVariant } from "../../../features/locations/types";
import { publishBroadcastState } from "../../../utils/broadcast";

export function Location() {
    const { person, activeLocation } = useAppStore();

    if (!person || !activeLocation) return null;

    const location = data.locations.find((item) => item.id === activeLocation);

    if (!location) return null;

    return (
        <LocationContent
            key={location.id}
            person={person}
            location={location}
        />
    );
}

type LocationContentProps = {
    person: PersonData;
    location: LocationData;
};

function LocationContent({ person, location }: LocationContentProps) {
    const { completedLocations, setActiveLocation, addCompletedLocation } =
        useAppStore();
    const locationModule = getLocationModule(location);
    const [activeReply, setActiveReply] = useState<ReplyData>(
        locationModule.getInitialReply(person),
    );
    const [backgroundVariant, setBackgroundVariant] =
        useState<LocationBackgroundVariant>("main");
    const isCompleted = completedLocations.includes(location.id);
    const content = locationModule.render({
        location,
        person,
        isCompleted,
        setReply: setActiveReply,
        setBackgroundVariant,
        completeLocation: () => addCompletedLocation(location.id),
        closeLocation: () => setActiveLocation(null),
    });
    const backgroundByVariant = {
        main: locationModule.background ?? location.images.background.main,
        error:
            locationModule.backgroundError ??
            location.images.background.error ??
            locationModule.background ??
            location.images.background.main,
        complete:
            locationModule.backgroundComplete ??
            location.images.background.complete ??
            locationModule.background ??
            location.images.background.main,
    };

    useEffect(() => {
        publishBroadcastState({ screen: "noInteractive" });
    }, [location.id, person.id]);

    return (
        <div className={clsx("bg", styles.location)}>
            <Reply align="left" message="default" reply={activeReply} />
            <div className={clsx(styles.locationWrapper)}>
                <div className={styles.locationBox}>
                    <Text
                        variant="h4"
                        className={clsx(styles.locationBoxTitle)}
                    >
                        {location.title}
                    </Text>
                    <div className={styles.locationBoxWindow}>
                        <img
                            className={styles.locationBoxWindowImage}
                            src={backgroundByVariant[backgroundVariant]}
                            alt={location.title}
                        />
                        <div className={clsx(styles.locationBoxWindowContent)}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
