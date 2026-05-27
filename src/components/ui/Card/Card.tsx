import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";
import { Text } from "../Text/Text";

type Direction = "vertical" | "horizontal";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return <div className={clsx(styles.card, className)}>{children}</div>;
}

type CardTitleProps = {
    children: ReactNode;
    className?: string;
};

export function CardTitle({ children, className }: CardTitleProps) {
    return (
        <Text variant="body-m" className={clsx(styles.cardTitle, className)}>
            {children}
        </Text>
    );
}

type CardTextProps = {
    children: ReactNode;
    className?: string;
};

export function CardText({ children, className }: CardTextProps) {
    return (
        <Text variant="body-s" className={clsx(styles.cardText, className)}>
            {children}
        </Text>
    );
}

type CardBadgeProps = {
    children: ReactNode;
    className?: string;
};

export function CardBadge({ children, className }: CardBadgeProps) {
    return (
        <div className={clsx(styles.cardBadge, className)}>
            <Text variant="body-m" className={clsx(styles.cardBadgeText)}>
                {children}
            </Text>
        </div>
    );
}

type CardAnonsProps = {
    children: ReactNode;
    icon?: ReactNode;
    iconBackground?: string;
    className?: string;
};

export function CardAnons({
    children,
    icon,
    iconBackground,
    className,
}: CardAnonsProps) {
    return (
        <div className={clsx(styles.cardAnons, className)}>
            {icon && (
                <div
                    className={styles.cardAnonsIcon}
                    style={{ background: iconBackground }}
                >
                    {icon}
                </div>
            )}
            <div className={styles.cardAnonsText}>
                <Text variant="body-m">{children}</Text>
            </div>
        </div>
    );
}

type CardImageProps = {
    src: string;
    alt: string;
    className?: string;
};

export function CardImage({ src, alt, className }: CardImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={clsx(styles.cardImage, className)}
        />
    );
}

type CardProfileProps = {
    avatar: string;
    description?: ReactNode;
    className?: string;
};

export function CardProfile({
    avatar,
    description,
    className,
}: CardProfileProps) {
    return (
        <div className={clsx(styles.cardProfile, className)}>
            <img src={avatar} alt="" className={styles.cardProfileAvatar} />
            {description && (
                <div className={styles.cardProfileContent}>
                    {description && (
                        <Text
                            variant="body-m"
                            className={styles.cardProfileDescription}
                        >
                            {description}
                        </Text>
                    )}
                </div>
            )}
        </div>
    );
}

type CardCardsProps = {
    children: ReactNode;
    direction?: Direction;
    className?: string;
};

export function CardCards({
    children,
    direction = "vertical",
    className,
}: CardCardsProps) {
    return (
        <div className={clsx(styles.cardCards, styles[direction], className)}>
            {children}
        </div>
    );
}

type CardsCardProps = {
    icon?: ReactNode;
    children: ReactNode;
    direction?: Direction;
    fill?: boolean;
    className?: string;
};

export function CardsCard({
    icon,
    children,
    direction = "vertical",
    fill = false,
    className,
}: CardsCardProps) {
    return (
        <div
            className={clsx(
                styles.cardsCard,
                styles[direction],
                fill && styles.fill,
                className,
            )}
        >
            {icon && <div className={styles.cardsCardIcon}>{icon}</div>}
            <Text variant="body-s" className={styles.cardsCardText}>
                {children}
            </Text>
        </div>
    );
}

type CardListProps = {
    items: { title: string; subtitle: string }[];
    className?: string;
};

export function CardList({ items, className }: CardListProps) {
    return (
        <div className={clsx(styles.cardList, className)}>
            {items.map((item, i) => (
                <div key={i} className={clsx(styles.cardListItem)}>
                    <div className={clsx(styles.cardListItemHead)}>
                        <Text
                            variant="body-m"
                            className={clsx(styles.cardListItemIterator)}
                        >
                            {i + 1 < 10 ? `0${i + 1}` : i}
                        </Text>
                        <Text
                            variant="body-m"
                            className={clsx(styles.cardListItemTitle)}
                        >
                            {item.title}
                        </Text>
                    </div>
                    <Text
                        variant="caption"
                        className={clsx(styles.cardListItemSubtitle)}
                    >
                        {item.subtitle}
                    </Text>
                </div>
            ))}
        </div>
    );
}
