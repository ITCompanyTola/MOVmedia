import clsx from "clsx";
import styles from "./Location.module.css";
import { useAppStore } from "../../../store/useAppStore";
import data, {
    type LocationData,
    type PersonData,
    type ReplyData,
} from "../../../data/data";
import { Text } from "../Text/Text";
import { useEffect, useRef, useState } from "react";
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
    const locationModule = getLocationModule(location, person);
    const [activeReply, setActiveReply] = useState<ReplyData>(
        locationModule.getInitialReply(person),
    );
    const [backgroundVariant, setBackgroundVariant] =
        useState<LocationBackgroundVariant>("main");
    const errorVideoRef = useRef<HTMLVideoElement | null>(null);
    const completeVideoRef = useRef<HTMLVideoElement | null>(null);
    const isCompleted = completedLocations.includes(location.id);
    const locationTitle =
        location.baloon.persons?.[person.id]?.title ??
        location.baloon.title ??
        location.title;
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
        main:
            locationModule.background ??
            location.images.background.persons?.[person.id]?.main ??
            location.images.background.main,
        error:
            locationModule.backgroundError ??
            location.images.background.persons?.[person.id]?.error ??
            locationModule.background ??
            location.images.background.persons?.[person.id]?.main ??
            location.images.background.main,
        complete:
            locationModule.backgroundComplete ??
            location.images.background.persons?.[person.id]?.complete ??
            locationModule.background ??
            location.images.background.persons?.[person.id]?.main ??
            location.images.background.main,
    };
    const errorVideo = location.images.video?.in;
    const completeVideo = location.images.video?.out;
    const isErrorVideoActive = backgroundVariant === "error" && Boolean(errorVideo);
    const isCompleteVideoActive =
        backgroundVariant === "complete" && Boolean(completeVideo);

    useEffect(() => {
        publishBroadcastState({ screen: "noInteractive" });
    }, [location.id, person.id]);

    useEffect(() => {
        const activeVideo =
            backgroundVariant === "error"
                ? errorVideoRef.current
                : backgroundVariant === "complete"
                  ? completeVideoRef.current
                  : null;

        if (!activeVideo) return;

        activeVideo.currentTime = 0;
        void activeVideo.play();
    }, [backgroundVariant]);

    return (
        <div className={clsx("bg", styles.location)}>
            <Reply
                align="left"
                message="default"
                placement="location"
                reply={activeReply}
            />
            <div className={clsx(styles.locationWrapper)}>
                <div className={styles.locationBox}>
                    <Text
                        variant="h4"
                        className={clsx(styles.locationBoxTitle)}
                    >
                        {locationTitle}
                    </Text>
                    <div className={styles.locationBoxWindow}>
                        <div className={styles.locationBoxWindowMediaFrame}>
                            <img
                                className={styles.locationBoxWindowMedia}
                                src={backgroundByVariant[backgroundVariant]}
                                alt={locationTitle}
                            />
                            {errorVideo && (
                                <video
                                    ref={errorVideoRef}
                                    className={clsx(
                                        styles.locationBoxWindowMedia,
                                        styles.locationBoxWindowVideo,
                                        isErrorVideoActive &&
                                            styles.locationBoxWindowVideoActive,
                                    )}
                                    src={errorVideo}
                                    muted
                                    playsInline
                                    preload="auto"
                                />
                            )}
                            {completeVideo && (
                                <video
                                    ref={completeVideoRef}
                                    className={clsx(
                                        styles.locationBoxWindowMedia,
                                        styles.locationBoxWindowVideo,
                                        isCompleteVideoActive &&
                                            styles.locationBoxWindowVideoActive,
                                    )}
                                    src={completeVideo}
                                    muted
                                    playsInline
                                    preload="auto"
                                />
                            )}
                        </div>
                        <div className={clsx(styles.locationBoxWindowContent)}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
