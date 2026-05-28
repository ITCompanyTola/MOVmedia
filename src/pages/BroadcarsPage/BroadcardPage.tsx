import { useEffect, useState } from "react";
import styles from "./BroadcardPage.module.css";

import main from "../../assets/images/broadcast/main.jpg";
import completeMap from "../../assets/images/broadcast/complete-map.jpg";
import noInteractive from "../../assets/images/broadcast/no-interactive.jpg";
import final from "../../assets/images/broadcast/final.jpg";

import schoolboyStart from "../../assets/images/broadcast/schoolboy/start.jpg";
import schoolboyQuiz from "../../assets/images/broadcast/schoolboy/quiz.jpg";
import schoolboyQuizTrue from "../../assets/images/broadcast/schoolboy/quiz-true.jpg";
import schoolboyQuizFalse from "../../assets/images/broadcast/schoolboy/quiz-false.jpg";
import schoolboyQuiz2 from "../../assets/images/broadcast/schoolboy/quiz-2.jpg";
import schoolboyQuiz2True from "../../assets/images/broadcast/schoolboy/quiz-2-true.jpg";
import schoolboyQuiz2False from "../../assets/images/broadcast/schoolboy/quiz-2-false.jpg";
import {
    getSavedBroadcastState,
    subscribeBroadcastState,
    type BroadcastState,
} from "../../utils/broadcast";
import type { PersonId } from "../../data/data";

type PersonBroadcastImages = {
    start: string;
    quiz: {
        idle: string;
        true: string;
        false: string;
    };
    quiz2: {
        idle: string;
        true: string;
        false: string;
    };
};

const images: {
    common: {
        main: string;
        completeMap: string;
        noInteractive: string;
        final: string;
    };
} & Partial<Record<PersonId, PersonBroadcastImages>> = {
    common: {
        main: main,
        completeMap: completeMap,
        noInteractive: noInteractive,
        final: final,
    },
    schoolboy: {
        start: schoolboyStart,
        quiz: {
            idle: schoolboyQuiz,
            true: schoolboyQuizTrue,
            false: schoolboyQuizFalse,
        },
        quiz2: {
            idle: schoolboyQuiz2,
            true: schoolboyQuiz2True,
            false: schoolboyQuiz2False,
        },
    },
};

const getBroadcastImage = (state: BroadcastState) => {
    if (state.screen === "choice") {
        return null;
    }

    if (state.screen === "start") {
        return images[state.personId]?.start ?? images.common.main;
    }

    if (state.screen === "quiz") {
        return (
            images[state.personId]?.[state.quizId]?.[state.result] ??
            images.common.main
        );
    }

    return images.common[state.screen];
};

export default function BroadcastPage() {
    const [broadcastState, setBroadcastState] = useState<BroadcastState>(
        getSavedBroadcastState,
    );
    const image = getBroadcastImage(broadcastState);

    useEffect(() => {
        return subscribeBroadcastState(setBroadcastState);
    }, []);

    return (
        <div className={styles.broadcastPage}>
            {image && (
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
            )}
        </div>
    );
}
