import clsx from "clsx";

import styles from "./MapPage.module.css";
import { Footer } from "../../components/ui/Footer/Footer";
import { useAppStore } from "../../store/useAppStore";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reply } from "../../components/ui/Reply/Reply";
import data from "../../data/data";
import type { LocationId } from "../../data/data";
import { Building } from "../../components/ui/Building/Building";
import { Location } from "../../components/ui/Location/Location";
import { FinalScreen } from "../../components/ui/FinalScreen/FinalScreen";
import { publishBroadcastState } from "../../utils/broadcast";

export function MapPage() {
    const { activeLocation, setActiveLocation, completedLocations } =
        useAppStore();
    const { person } = useAppStore();
    const [start, setStart] = useState(true);
    const [startStep, setStartStep] = useState(0);
    const [isFinalScreenVisible, setIsFinalScreenVisible] = useState(false);
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

    if (!person) {
        return <Navigate to="/" replace />;
    }

    const handleNextStartStep = () => {
        setStartStep((prev) =>
            Math.min(prev + 1, person.replies.start.length - 1),
        );
    };

    const handleLocationClick = (id: LocationId) => {
        if (showDefaultBuildings) return;
        if (!activeBuildings) return;
        if (completedLocations.includes(id)) return;

        setStart(false);
        setActiveLocation(id);
    };

    return (
        <div className={clsx(styles.mapPage)}>
            <div className={clsx("layout", styles.mapPageLayout)}>
                {start && (
                    <Reply
                        align={person.replies.align || "left"}
                        message="aside"
                        reply={person.replies.start[startStep]}
                        onClick={handleNextStartStep}
                    />
                )}
                {isFinalScreenVisible && <FinalScreen person={person} />}
                {data.locations.map((location) => (
                    <Building
                        onClick={handleLocationClick}
                        active={
                            !showDefaultBuildings &&
                            activeBuildings &&
                            person.locations.includes(location.id)
                        }
                        complete={
                            !showDefaultBuildings &&
                            completedLocations.includes(location.id)
                        }
                        key={location.id}
                        location={location}
                    />
                ))}
                {activeLocation && <Location />}
                <div></div>
                <Footer theme={activeLocation ? "dark" : "light"} />
            </div>
        </div>
    );
}
