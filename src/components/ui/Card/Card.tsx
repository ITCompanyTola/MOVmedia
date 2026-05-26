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
    className?: string;
};

export function CardsCard({
    icon,
    children,
    direction = "vertical",
    className,
}: CardsCardProps) {
    return (
        <div className={clsx(styles.cardsCard, styles[direction], className)}>
            {icon && <div className={styles.cardsCardIcon}>{icon}</div>}
            <Text variant="body-s" className={styles.cardsCardText}>
                {children}
            </Text>
        </div>
    );
}
