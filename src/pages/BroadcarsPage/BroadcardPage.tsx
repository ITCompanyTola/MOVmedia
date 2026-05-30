import { useEffect, useState } from "react";
import styles from "./BroadcardPage.module.css";

import tiser from "../../assets/video/broadcast/tiser.mp4";
import main from "../../assets/images/broadcast/main.jpg";
import completeMap from "../../assets/images/broadcast/complete-map.jpg";
import noInteractive from "../../assets/images/broadcast/no-interactive.jpg";
import final from "../../assets/images/broadcast/final.jpg";

import schoolboyChoice from "../../assets/images/broadcast/schoolboy/choice.jpg";
import schoolboyStart from "../../assets/images/broadcast/schoolboy/start.jpg";
import schoolboyQuiz from "../../assets/images/broadcast/schoolboy/quiz.jpg";
import schoolboyQuizTrue from "../../assets/images/broadcast/schoolboy/quiz-true.jpg";
import schoolboyQuizFalse from "../../assets/images/broadcast/schoolboy/quiz-false.jpg";
import schoolboyQuiz2 from "../../assets/images/broadcast/schoolboy/quiz-2.jpg";
import schoolboyQuiz2True from "../../assets/images/broadcast/schoolboy/quiz-2-true.jpg";
import schoolboyQuiz2False from "../../assets/images/broadcast/schoolboy/quiz-2-false.jpg";

import studentChoice from "../../assets/images/broadcast/student/choice.jpg";
import studentStart from "../../assets/images/broadcast/student/start.jpg";
import studentQuiz from "../../assets/images/broadcast/student/quiz.jpg";
import studentQuizTrue from "../../assets/images/broadcast/student/quiz-true.jpg";
import studentQuizFalse from "../../assets/images/broadcast/student/quiz-false.jpg";
import studentQuiz2 from "../../assets/images/broadcast/student/quiz-2.jpg";
import studentQuiz2True from "../../assets/images/broadcast/student/quiz-2-true.jpg";
import studentQuiz2False from "../../assets/images/broadcast/student/quiz-2-false.jpg";

import expertChoice from "../../assets/images/broadcast/expert/choice.jpg";
import expertStart from "../../assets/images/broadcast/expert/start.jpg";
import expertQuiz from "../../assets/images/broadcast/expert/quiz.jpg";
import expertQuizTrue from "../../assets/images/broadcast/expert/quiz-true.jpg";
import expertQuizFalse from "../../assets/images/broadcast/expert/quiz-false.jpg";

import representativeChoice from "../../assets/images/broadcast/expert/representative/choice.jpg";
import representativeStart from "../../assets/images/broadcast/expert/representative/start.jpg";
import representativeQuiz from "../../assets/images/broadcast/expert/representative/quiz.jpg";
import representativeQuizTrue from "../../assets/images/broadcast/expert/representative/quiz-true.jpg";
import representativeQuizFalse from "../../assets/images/broadcast/expert/representative/quiz-false.jpg";
import representativeQuiz2 from "../../assets/images/broadcast/expert/representative/quiz-2.jpg";
import representativeQuiz2True from "../../assets/images/broadcast/expert/representative/quiz-2-true.jpg";
import {
    getSavedBroadcastState,
    subscribeBroadcastState,
    type BroadcastQuizResult,
    type BroadcastState,
} from "../../utils/broadcast";
import type { PersonId } from "../../data/data";

type QuizBroadcastImages = Partial<Record<BroadcastQuizResult, string>> & {
    idle: string;
};

type PersonBroadcastImages = {
    choice: string;
    start: string;
    quiz: QuizBroadcastImages;
    quiz2?: QuizBroadcastImages;
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
        choice: schoolboyChoice,
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
    student: {
        choice: studentChoice,
        start: studentStart,
        quiz: {
            idle: studentQuiz,
            true: studentQuizTrue,
            false: studentQuizFalse,
        },
        quiz2: {
            idle: studentQuiz2,
            true: studentQuiz2True,
            false: studentQuiz2False,
        },
    },
    expert: {
        choice: expertChoice,
        start: expertStart,
        quiz: {
            idle: expertQuiz,
            true: expertQuizTrue,
            false: expertQuizFalse,
        },
    },
    representative: {
        choice: representativeChoice,
        start: representativeStart,
        quiz: {
            idle: representativeQuiz,
            true: representativeQuizTrue,
            false: representativeQuizFalse,
        },
        quiz2: {
            idle: representativeQuiz2,
            true: representativeQuiz2True,
        },
    },
};

const getBroadcastImage = (state: BroadcastState) => {
    if (state.screen === "choice") {
        return state.personId
            ? (images[state.personId]?.choice ?? images.common.noInteractive)
            : images.common.noInteractive;
    }

    if (state.screen === "start") {
        return images[state.personId]?.start ?? images.common.main;
    }

    if (state.screen === "quiz") {
        const quizImages = images[state.personId]?.[state.quizId];

        return (
            quizImages?.[state.result] ?? quizImages?.idle ?? images.common.main
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
            {broadcastState.screen === "main" ? (
                <div className={styles.image}>
                    <video src={tiser} autoPlay muted loop playsInline />
                </div>
            ) : (
                image && (
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                )
            )}
        </div>
    );
}
