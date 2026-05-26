import clsx from "clsx";
import type { Data } from "../../../data/data";

import styles from "./Building.module.css";
import { Text } from "../Text/Text";

type BuildingProps = {
    active?: boolean;
    complete?: boolean;
    onClick: (id: string) => void;
    location: Data["data"]["locations"][number];
};

export function Building({
    active = false,
    complete = false,
    onClick,
    location,
}: BuildingProps) {
    const { id, images, position, title, subtitle, baloon } = location;

    return (
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
            <img
                src={images.building.main}
                alt={title}
                className={clsx(styles.buildingImage, styles.buildingMainImage)}
            />
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
                    left: `${baloon.position[0]}px`,
                    top: `${baloon.position[1]}px`,
                }}
            >
                <Text variant="body-m" className={styles.buildingBaloonTitle}>
                    {title}
                </Text>
                <Text variant="caption">{subtitle}</Text>
            </div>
        </div>
    );
}
