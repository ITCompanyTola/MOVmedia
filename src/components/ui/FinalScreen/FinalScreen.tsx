import type { PersonData } from "../../../data/data";
import { Reply } from "../Reply/Reply";
import styles from "./FinalScreen.module.css";

type FinalScreenProps = {
    person: PersonData;
};

export function FinalScreen({ person }: FinalScreenProps) {
    return (
        <div className={styles.finalScreen}>
            <Reply
                align="left"
                message="aside"
                final
                reply={person.replies.final}
            />
        </div>
    );
}
