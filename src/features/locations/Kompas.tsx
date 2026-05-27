import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Card } from "../../components/ui/Card/Card";
import { Text } from "../../components/ui/Text/Text";
import styles from "./Kompas.module.css";

import compas from "../../assets/images/components/compas/compas.png";
import compasArrow from "../../assets/images/components/compas/arrow.png";
import { Button } from "../../components/ui/Button/Button";

import shoolboyNotTop from "../../assets/images/persons/schoolboy/not-top.png";
import shoolboyThink from "../../assets/images/persons/schoolboy/think.png";
import shoolboyKlass from "../../assets/images/persons/schoolboy/klass.png";
import type { ReplyData } from "../../data/data";

import compasActive0 from "../../assets/images/components/compas/active-0.png";
import compasActive90 from "../../assets/images/components/compas/active-90.png";
import compasActive180 from "../../assets/images/components/compas/active-180.png";
import compasActive270 from "../../assets/images/components/compas/active-270.png";

type KompasAngle = 0 | 90 | 180 | 270;

type KompasVariant = {
    title: string;
    items: string[];
    reply: ReplyData;
};

type KompasProps = {
    setReply: (reply: ReplyData) => void;
    completeLocation: () => void;
    onComplete?: () => void;
};

const kompasAngles: KompasAngle[] = [0, 90, 180, 270];
const spinDuration = 2200;

const activeImages: Record<KompasAngle, string> = {
    0: compasActive0,
    90: compasActive90,
    180: compasActive180,
    270: compasActive270,
};

const variants: Record<KompasAngle, KompasVariant> = {
    0: {
        title: "Информационная безопасность",
        items: [
            "Разработчик защищенных систем",
            "Инженер по защите информации",
            "Криптограф",
        ],
        reply: {
            image: shoolboyNotTop,
            text: "У этого направления большой потенциал. Компании, банки, государство всегда нуждаются в защите данных\n**Посмотри, какие профессии есть в области информационной безопасности**",
        },
    },
    90: {
        title: "Юриспруденция",
        items: [
            "Адвокат",
            "Прокурор",
            "Нотариус",
            "Судебный пристав",
            "Цифровой юрист",
        ],
        reply: {
            image: shoolboyThink,
            text: "**Юриспруденция сложная, но интересная сфера**\nМне она тоже выпала, когда я крутил компас. Посмотри, кем ты можешь стать, если выберешь это направление",
        },
    },
    180: {
        title: "Экономика",
        items: [
            "Экономист",
            "Аудитор",
            "Бухгалтер",
            "Бизнес-аналитик",
            "Финансовый аналитик",
        ],
        reply: {
            image: shoolboyKlass,
            text: "**Экономика, класс!**\n Честно говоря, думал, цифры — это не моё, но после наших курсов любые примеры решаю с закрытыми глазами\nЭкономист, бизнес-аналитик: все эти профессии считаются очень престижными",
        },
    },
    270: {
        title: "Международные отношения",
        items: [
            "Специалист по внешней политике",
            "Международный аналитик",
            "Дипломат",
        ],
        reply: {
            image: shoolboyThink,
            text: "**Международные отношения вдохновляют меня больше всего**\nДавно мечтаю выучить несколько языков и стать дипломатом. Ты можешь выбрать профессию аналитика, журналиста или политолога",
        },
    },
};

export function Kompas({
    setReply,
    completeLocation,
    onComplete,
}: KompasProps) {
    const [state, setState] = useState<"idle" | "spin" | "result">("idle");
    const [rotation, setRotation] = useState(0);
    const [resultAngle, setResultAngle] = useState<KompasAngle | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSpin = () => {
        if (state === "spin") {
            return;
        }

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        const angle =
            kompasAngles[Math.floor(Math.random() * kompasAngles.length)];
        const currentAngle = ((rotation % 360) + 360) % 360;
        const angleDelta = (angle - currentAngle + 360) % 360;
        const nextRotation = rotation + 360 * 4 + angleDelta;

        setState("spin");
        setResultAngle(null);
        setRotation(nextRotation);

        timeoutRef.current = setTimeout(() => {
            const result = variants[angle];

            setResultAngle(angle);
            setReply(result.reply);
            completeLocation();
            onComplete?.();
            setState("result");
        }, spinDuration);
    };

    const result = resultAngle === null ? null : variants[resultAngle];
    const activeClassName =
        resultAngle === null ? null : styles[`compasActive${resultAngle}`];

    return (
        <Card
            className={clsx(
                styles.kompasCard,
                state === "spin" && styles.kompasCardSpin,
                state === "result" && styles.kompasCardResult,
            )}
        >
            <Text variant="body-l" className={styles.kompasCardTitle}>
                Компас профессий
            </Text>
            <div className={styles.kompasWrapper}>
                <img
                    src={compas}
                    alt="Компас"
                    className={styles.kompasWrapperImage}
                />
                <img
                    src={compasArrow}
                    alt="Стрелка"
                    className={styles.kompasWrapperArrow}
                    style={{
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    }}
                />
                {resultAngle !== null && activeClassName && (
                    <img
                        src={activeImages[resultAngle]}
                        alt=""
                        className={clsx(
                            activeClassName,
                            styles.compasActiveVisible,
                        )}
                    />
                )}
            </div>
            <Text variant="body-s" className={styles.kompasText}>
                А реальный тест с рекомендациями ждёт тебя на сайте платформы
                Содружество
            </Text>
            {result && (
                <div className={styles.kompasResult}>
                    <Text variant="body-m" className={styles.kompasResultTitle}>
                        {result.title}
                    </Text>
                    <div className={styles.kompasResultItems}>
                        {result.items.map((item) => (
                            <Text
                                key={item}
                                variant="body-s"
                                className={styles.kompasResultItem}
                            >
                                {item}
                            </Text>
                        ))}
                    </div>
                </div>
            )}
            <Button
                size="s"
                className={styles.kompasButton}
                fullWidth
                onClick={handleSpin}
            >
                Крутить
            </Button>
        </Card>
    );
}
