import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import type { ReplyData } from "../../../data/data";
import styles from "./Quiz.module.css";
import { ChevronRight } from "lucide-react";

type QuizQuestionData = {
    text: ReactNode;
    icon?: ReactNode;
    iconBackground?: string;
};

export type QuizAnswerData = {
    id: string;
    text: ReactNode;
    correct?: boolean;
    icon?: ReactNode;
    iconBackground?: string;
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
    onCorrect?: () => void;
    onContinue: () => void;
};

type QuizQuestionProps = {
    children: ReactNode;
    icon?: ReactNode;
    iconBackground?: string;
    className?: string;
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
                {children}
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
            setBackgroundVariant?.("complete");
            if (successReply) {
                setReply?.(successReply);
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
        wrongTimerRef.current = setTimeout(() => {
            setWrongAnswerId(null);
            wrongTimerRef.current = null;
        }, wrongDuration);
    };

    useEffect(() => clearWrongTimer, []);

    return (
        <div className={clsx(styles.quiz, className)}>
            <QuizQuestion
                icon={question.icon}
                iconBackground={question.iconBackground}
            >
                {question.text}
            </QuizQuestion>
            <div className={styles.quizAnswers}>
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
