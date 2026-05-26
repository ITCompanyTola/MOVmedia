import type { ReactNode } from "react";
import styles from "./Card.module.css";
import { Text } from "../Text/Text";

export function Card({ children }: { children: ReactNode }) {
    return <div className={styles.card}>{children}</div>;
}

export function CardText({ children }: { children: ReactNode }) {
    return (
        <Text variant="body-s" className={styles.cardText}>
            {children}
        </Text>
    );
}
