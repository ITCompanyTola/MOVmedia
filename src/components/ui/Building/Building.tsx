import clsx from "clsx";
import type { LocationData, LocationId, PersonId } from "../../../data/data";

import styles from "./Building.module.css";
import { Text } from "../Text/Text";
import { Check } from "lucide-react";

type BuildingProps = {
    active?: boolean;
    complete?: boolean;
    onClick: (id: LocationId) => void;
    location: LocationData;
    personId?: PersonId;
};

export function Building({
    active = false,
    complete = false,
    onClick,
    location,
    personId,
}: BuildingProps) {
    const { id, images, position, title, subtitle, baloon } = location;
    const baloonOverride = personId ? baloon.persons?.[personId] : undefined;
    const baloonPosition = baloonOverride?.position ?? baloon.position;
    const baloonTitle = baloonOverride?.title ?? baloon.title ?? title;
    const baloonText = baloonOverride?.text ?? baloon.text ?? subtitle;

    return (
        <>
            <div
                onClick={() => onClick(id)}
                className={clsx(
                    styles.building,
                    active && styles.buildingActive,
                    complete && styles.buildingComplete,
                )}
                style={{
                    left: `${position[0]}px`,
                    top: `${position[1]}px`,
                }}
            >
                {/* <img
                    src={images.building.main}
                    alt={title}
                    className={clsx(
                        styles.buildingImage,
                        styles.buildingMainImage,
                    )}
                /> */}
                <img
                    src={images.building.active}
                    alt={title}
                    className={clsx(
                        styles.buildingImage,
                        styles.buildingActiveImage,
                    )}
                />
                <img
                    src={images.building.complete}
                    alt={title}
                    className={clsx(
                        styles.buildingImage,
                        styles.buildingCompleteImage,
                    )}
                />
                <div
                    className={styles.buildingBaloon}
                    style={{
                        left: `${baloonPosition[0]}px`,
                        top: `${baloonPosition[1]}px`,
                    }}
                >
                    <div className={styles.buildingBaloonCheck}>
                        <Check color="white" />
                    </div>
                    <Text
                        variant="body-m"
                        className={styles.buildingBaloonTitle}
                    >
                        {baloonTitle}
                    </Text>
                    <Text variant="caption">{baloonText}</Text>
                </div>
            </div>
        </>
    );
}
