import clsx from "clsx";

import styles from "./MapPage.module.css";
import { Footer } from "../../components/ui/Footer/Footer";
import { useAppStore } from "../../store/useAppStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Reply } from "../../components/ui/Reply/Reply";
import data from "../../data/data";
import { Building } from "../../components/ui/Building/Building";
import { Location } from "../../components/ui/Location/Location";

export function MapPage() {
    const navigate = useNavigate();
    const { activeLocation, setActiveLocation, completedLocations } =
        useAppStore();
    const { person } = useAppStore();
    const [start, setStart] = useState(true);
    const [startStep, setStartStep] = useState(0);
    const [activeBuildings, setActiveBuildings] = useState(false);

    if (!person) {
        navigate("/");
        return null;
    }

    const handleNextStartStep = () => {
        setStartStep((prev) => prev + 1);
    };

    const handleLocationClick = (id: string) => {
        if (!activeBuildings) return;

        setStart(false);
        setActiveLocation(id);
    };

    useEffect(() => {
        if (startStep === person.replies.start.length - 3) {
            setActiveBuildings(true);
        }
    }, [startStep]);

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
                {data.data.locations.map((location) => (
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
