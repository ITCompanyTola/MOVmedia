import clsx from "clsx";
import styles from "./Location.module.css";
import { useAppStore } from "../../../store/useAppStore";
import data, { type Data } from "../../../data/data";
import { Text } from "../Text/Text";
import { useEffect, useState } from "react";
import { Reply } from "../Reply/Reply";
import { LocationStart } from "./LocationStart";

export function Location() {
    const { person, activeLocation } = useAppStore();
    const [start] = useState(true);
    const [activeReply, setActiveReply] = useState<
        Data["data"]["locations"][number]["start"][number]["reply"] | null
    >(null);

    if (!person || !activeLocation) return null;

    const location = data.data.locations.find((l) => l.id === activeLocation);

    if (!location) return null;

    useEffect(() => {
        setActiveReply(location.start[person.id].reply);
    }, [location]);

    return (
        <div className={clsx("bg", styles.location)}>
            {activeReply && (
                <Reply align="left" message="default" reply={activeReply} />
            )}
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
                            src={location.images.background.main}
                            alt={location.title}
                        />
                        <div className={clsx(styles.locationBoxWindowContent)}>
                            {start && <LocationStart />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
