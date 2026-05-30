import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import type { PersonId, ReplyData } from "../../../data/data";
import styles from "./Quiz.module.css";
import { ChevronRight } from "lucide-react";
import {
    publishBroadcastState,
    type BroadcastQuizId,
} from "../../../utils/broadcast";

type QuizQuestionData = {
    text: ReactNode;
    icon?: ReactNode;
    iconBackground?: string;
    className?: string;
};

export type QuizAnswerData = {
    id: string;
    text: ReactNode;
    correct?: boolean;
    icon?: ReactNode;
    iconBackground?: string;
    successReply?: ReplyData;
};

type QuizProps = {
    question: QuizQuestionData;
    answers: QuizAnswerData[];
    wrongReplies?: ReplyData[];
    successReply?: ReplyData;
    setReply?: (reply: ReplyData) => void;
    setBackgroundVariant?: (variant: "main" | "error" | "complete") => void;
    wrongDuration?: number;
    continueText?: string;
    className?: string;
    answersClassName?: string;
    broadcastPersonId?: PersonId;
    broadcastQuizId?: BroadcastQuizId;
    onCorrect?: () => void;
    onContinue: () => void;
};

type QuizQuestionProps = {
    children: ReactNode;
    icon?: ReactNode;
    iconBackground?: string;
    className?: string;
};

const renderQuizQuestionText = (children: ReactNode): ReactNode => {
    if (typeof children !== "string") return children;

    return children.split("\n").map((line, lineIndex, lines) => {
        const parts = line.split(/(\*[^*]+\*)/g);
        return (
            <span key={lineIndex}>
                {parts.map((part, partIndex) =>
                    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
                        <span key={partIndex} className={styles.quizQuestionThin}>
                            {part.slice(1, -1)}
                        </span>
                    ) : (
                        <span key={partIndex}>{part}</span>
                    ),
                )}
                {lineIndex < lines.length - 1 && <br />}
            </span>
        );
    });
};

export function QuizQuestion({
    children,
    icon,
    iconBackground,
    className,
}: QuizQuestionProps) {
    return (
        <div className={clsx(styles.quizQuestion, className)}>
            {icon && (
                <div
                    className={styles.quizQuestionIcon}
                    style={{ background: iconBackground }}
                >
                    {icon}
                </div>
            )}
            <Text variant="body-m" className={styles.quizQuestionText}>
                {renderQuizQuestionText(children)}
            </Text>
        </div>
    );
}

type QuizAnswerProps = {
    answer: QuizAnswerData;
    state?: "idle" | "correct" | "wrong";
    disabled?: boolean;
    onClick: () => void;
};

export function QuizAnswer({
    answer,
    state = "idle",
    disabled = false,
    onClick,
}: QuizAnswerProps) {
    return (
        <button
            disabled={disabled}
            className={clsx(
                styles.quizAnswer,
                state === "correct" && styles.quizAnswerCorrect,
                state === "wrong" && styles.quizAnswerWrong,
            )}
            onClick={onClick}
        >
            {answer.icon && (
                <span
                    className={styles.quizAnswerIcon}
                    style={{ background: answer.iconBackground }}
                >
                    {answer.icon}
                </span>
            )}
            <Text variant="body-s" className={styles.quizAnswerText}>
                {answer.text}
            </Text>
        </button>
    );
}

export function Quiz({
    question,
    answers,
    wrongReplies = [],
    successReply,
    setReply,
    setBackgroundVariant,
    wrongDuration = 2000,
    continueText = "Продолжить",
    className,
    answersClassName,
    broadcastPersonId,
    broadcastQuizId = "quiz",
    onCorrect,
    onContinue,
}: QuizProps) {
    const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null);
    const [wrongAnswerId, setWrongAnswerId] = useState<string | null>(null);
    const wrongCountRef = useRef(0);
    const wrongTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isAnswered = correctAnswerId !== null;

    const clearWrongTimer = () => {
        if (wrongTimerRef.current) {
            clearTimeout(wrongTimerRef.current);
            wrongTimerRef.current = null;
        }
    };

    const handleAnswer = (answer: QuizAnswerData) => {
        if (isAnswered) return;

        clearWrongTimer();

        if (answer.correct) {
            setCorrectAnswerId(answer.id);
            setWrongAnswerId(null);
            if (wrongCountRef.current > 0) {
                setBackgroundVariant?.("complete");
            }
            if (broadcastPersonId) {
                publishBroadcastState({
                    screen: "quiz",
                    personId: broadcastPersonId,
                    quizId: broadcastQuizId,
                    result: "true",
                });
            }
            const replyToShow = answer.successReply ?? successReply;
            if (replyToShow) {
                setReply?.(replyToShow);
            }
            onCorrect?.();
            return;
        }

        const wrongReply = wrongReplies[wrongCountRef.current];
        wrongCountRef.current = Math.min(
            wrongCountRef.current + 1,
            Math.max(wrongReplies.length - 1, 0),
        );

        if (wrongReply) {
            setReply?.(wrongReply);
        }

        setWrongAnswerId(answer.id);
        setBackgroundVariant?.("error");
        if (broadcastPersonId) {
            publishBroadcastState({
                screen: "quiz",
                personId: broadcastPersonId,
                quizId: broadcastQuizId,
                result: "false",
            });
        }
        wrongTimerRef.current = setTimeout(() => {
            setWrongAnswerId(null);
            wrongTimerRef.current = null;
        }, wrongDuration);
    };

    useEffect(() => clearWrongTimer, []);

    useEffect(() => {
        if (!broadcastPersonId) {
            return;
        }

        publishBroadcastState({
            screen: "quiz",
            personId: broadcastPersonId,
            quizId: broadcastQuizId,
            result: "idle",
        });
    }, [broadcastPersonId, broadcastQuizId]);

    return (
        <div className={clsx(styles.quiz, className)}>
            <QuizQuestion
                icon={question.icon}
                iconBackground={question.iconBackground}
                className={question.className}
            >
                {question.text}
            </QuizQuestion>
            <div className={clsx(styles.quizAnswers, answersClassName)}>
                {answers.map((answer) => (
                    <QuizAnswer
                        key={answer.id}
                        answer={answer}
                        disabled={isAnswered}
                        state={
                            correctAnswerId === answer.id
                                ? "correct"
                                : wrongAnswerId === answer.id
                                  ? "wrong"
                                  : "idle"
                        }
                        onClick={() => handleAnswer(answer)}
                    />
                ))}
            </div>
            {isAnswered && (
                <div className={styles.quizActions}>
                    <Button size="s" fullWidth onClick={onContinue}>
                        {continueText} <ChevronRight />
                    </Button>
                </div>
            )}
        </div>
    );
}
