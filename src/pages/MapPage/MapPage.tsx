import clsx from "clsx";

import styles from "./MapPage.module.css";
import { Footer } from "../../components/ui/Footer/Footer";
import { useAppStore } from "../../store/useAppStore";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Reply } from "../../components/ui/Reply/Reply";
import data from "../../data/data";
import type { LocationId } from "../../data/data";
import { Building } from "../../components/ui/Building/Building";
import { Location } from "../../components/ui/Location/Location";

export function MapPage() {
    const { activeLocation, setActiveLocation, completedLocations } =
        useAppStore();
    const { person } = useAppStore();
    const [start, setStart] = useState(true);
    const [startStep, setStartStep] = useState(0);

    if (!person) {
        return <Navigate to="/" replace />;
    }

    const activeBuildings = startStep >= person.replies.start.length - 2;

    const handleNextStartStep = () => {
        setStartStep((prev) =>
            Math.min(prev + 1, person.replies.start.length - 1),
        );
    };

    const handleLocationClick = (id: LocationId) => {
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
                {data.locations.map((location) => (
                    <Building
                        onClick={handleLocationClick}
                        active={
                            activeBuildings &&
                            person.locations.includes(location.id)
                        }
                        complete={completedLocations.includes(location.id)}
                        key={location.id}
                        location={location}
                    />
                ))}
                {activeLocation && <Location />}
                <div></div>
                <Footer theme="light" />
            </div>
        </div>
    );
}
