import clsx from "clsx";

import styles from "./MapPage.module.css";
import { Footer } from "../../components/ui/Footer/Footer";
import { useAppStore } from "../../store/useAppStore";
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reply } from "../../components/ui/Reply/Reply";
import data from "../../data/data";
import type { LocationId, ReplyData } from "../../data/data";
import { Building } from "../../components/ui/Building/Building";
import { Location } from "../../components/ui/Location/Location";
import { FinalScreen } from "../../components/ui/FinalScreen/FinalScreen";
import { publishBroadcastState } from "../../utils/broadcast";
import { recordFinalReached } from "../../utils/gameStats";

export function MapPage() {
    const { activeLocation, setActiveLocation, completedLocations } =
        useAppStore();
    const { person } = useAppStore();
    const [start, setStart] = useState(true);
    const [startStep, setStartStep] = useState(0);
    const [mapReply, setMapReply] = useState<ReplyData | null>(null);
    const [routeLocationId, setRouteLocationId] = useState<LocationId | null>(
        null,
    );
    const [isFinalScreenVisible, setIsFinalScreenVisible] = useState(false);
    const routeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const activeBuildings = person
        ? startStep >= person.replies.start.length - 2
        : false;
    const allPersonLocationsCompleted = person?.locations.every((id) =>
        completedLocations.includes(id),
    );
    const isFinalScreenReady =
        Boolean(person) &&
        !start &&
        !activeLocation &&
        Boolean(allPersonLocationsCompleted);
    const showDefaultBuildings = isFinalScreenReady;
    const routeLocation = data.locations.find(
        (location) => location.id === routeLocationId,
    );
    const isRoutePlaying = routeLocationId !== null;

    useEffect(() => {
        if (!isFinalScreenReady || isFinalScreenVisible) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsFinalScreenVisible(true);
        }, 0);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isFinalScreenReady, isFinalScreenVisible]);

    useEffect(() => {
        if (!person || activeLocation) {
            return;
        }

        if (isFinalScreenVisible) {
            recordFinalReached();
            publishBroadcastState({ screen: "final" });
            return;
        }

        if (activeBuildings) {
            publishBroadcastState({ screen: "completeMap" });
            return;
        }

        publishBroadcastState({
            screen: "start",
            personId: person.id,
        });
    }, [activeBuildings, activeLocation, isFinalScreenVisible, person]);

    useEffect(() => {
        return () => {
            if (routeTimerRef.current) {
                clearTimeout(routeTimerRef.current);
            }
        };
    }, []);

    if (!person) {
        return <Navigate to="/" replace />;
    }

    const handleNextStartStep = () => {
        setMapReply(null);
        setStartStep((prev) =>
            Math.min(prev + 1, person.replies.start.length - 1),
        );
    };

    const handleLocationClick = (id: LocationId) => {
        if (isRoutePlaying) return;
        if (showDefaultBuildings) return;
        if (!activeBuildings) return;
        if (!person.locations.includes(id)) {
            setStart(false);
            setMapReply(person.replies.lockedLocation);
            return;
        }
        if (completedLocations.includes(id)) return;

        const location = data.locations.find((item) => item.id === id);

        setStart(false);
        setMapReply(null);

        if (!location?.route?.video) {
            setActiveLocation(id);
            return;
        }

        setRouteLocationId(id);
    };

    const handleRouteVideoEnd = () => {
        if (!routeLocationId || routeTimerRef.current) return;

        routeTimerRef.current = setTimeout(() => {
            const locationId = routeLocationId;
            setRouteLocationId(null);
            setActiveLocation(locationId);
            routeTimerRef.current = null;
        }, 300);
    };

    return (
        <div className={clsx(styles.mapPage)}>
            <div className={clsx("layout", styles.mapPageLayout)}>
                {start && !isRoutePlaying && (
                    <Reply
                        align={person.replies.align || "left"}
                        message="aside"
                        reply={person.replies.start[startStep]}
                        onClick={handleNextStartStep}
                        maxWidth={
                            person.id === "student" && startStep === 1
                                ? 486
                                : 1000
                        }
                    />
                )}
                {!start &&
                    !isRoutePlaying &&
                    !activeLocation &&
                    !allPersonLocationsCompleted && (
                        <Reply
                            align={person.replies.align || "left"}
                            message="aside"
                            reply={
                                mapReply ??
                                person.replies.start[
                                    person.replies.start.length - 1
                                ]
                            }
                        />
                    )}
                {isFinalScreenVisible && <FinalScreen person={person} />}
                {data.locations.map((location) => (
                    <Building
                        onClick={handleLocationClick}
                        active={
                            isRoutePlaying
                                ? location.id === routeLocationId
                                : !showDefaultBuildings &&
                                  activeBuildings &&
                                  person.locations.includes(location.id)
                        }
                        complete={
                            !isRoutePlaying &&
                            !showDefaultBuildings &&
                            completedLocations.includes(location.id)
                        }
                        key={location.id}
                        location={location}
                        personId={person.id}
                    />
                ))}
                {activeLocation && <Location />}
                <div></div>
                <Footer theme={activeLocation ? "dark" : "light"} />
            </div>
            {routeLocation?.route && (
                <div className={styles.route}>
                    <video
                        key={routeLocation.id}
                        src={routeLocation.route.video}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleRouteVideoEnd}
                        onError={handleRouteVideoEnd}
                    />
                </div>
            )}
        </div>
    );
}
