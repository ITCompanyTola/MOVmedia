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
    const baloonWidth = baloonOverride?.width ?? baloon.width;
    const baloonTitle = baloonOverride?.title ?? baloon.title ?? title;
    const baloonText = baloonOverride?.text ?? baloon.text ?? subtitle;

    return (
        <>
            <div
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
                {location.clickArea && (
                    <div
                        className={styles.clickArea}
                        onClick={() => onClick(id)}
                        style={{
                            left: location.clickArea.position[0],
                            top: location.clickArea.position[1],
                        }}
                        dangerouslySetInnerHTML={{
                            __html: location.clickArea.svg,
                        }}
                    />
                )}
                <div
                    className={styles.buildingBaloon}
                    onClick={() => onClick(id)}
                    style={{
                        left: `${baloonPosition[0]}px`,
                        top: `${baloonPosition[1]}px`,
                        width: baloonWidth,
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
                    <Text
                        variant="caption"
                        className={styles.buildingBaloonText}
                    >
                        {baloonText}
                    </Text>
                </div>
            </div>
        </>
    );
}
