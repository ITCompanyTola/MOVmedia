import { useState } from "react";
import {
    Card,
    CardCards,
    CardsCard,
    CardTitle,
} from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./PosterSquareLocation.module.css";

import { Button } from "../../components/ui/Button/Button";
import { ChevronRight } from "lucide-react";
import { Text } from "../../components/ui/Text/Text";

import studentNodTop from "../../assets/images/persons/student/nod-top.png";
import eventsListItem1 from "../../assets/images/city/locations/poster-square/events-list-item-1.png";
import eventsListItem2 from "../../assets/images/city/locations/poster-square/events-list-item-2.png";
import eventsListItem3 from "../../assets/images/city/locations/poster-square/events-list-item-3.png";

export function StudentPosterSquareScreen({
    setReply,
    completeLocation,
    closeLocation,
}: LocationScreenProps) {
    const [step, setStep] = useState<"intro" | "choice" | "events">("intro");
    const [isCybersecurityChecked, setIsCybersecurityChecked] = useState(false);

    const handleStart = () => {
        setStep("choice");
        setReply({
            image: studentNodTop,
            text: "Попробуй выбрать фильтр «Кибербезопасность», чтобы узнать о ближайших мероприятиях по этой теме",
        });
    };

    const handleChoice = () => {
        if (!isCybersecurityChecked) {
            return;
        }

        setStep("events");
        setReply({
            image: studentNodTop,
            text: "Вот так платформа помогает находить события, которые подходят именно тебе. Осталось выбрать, что ближе: вебинар, мастер-класс или конференция\n**Двигаемся дальше?**",
        });
    };

    const handleComplete = () => {
        completeLocation();
        closeLocation();
    };

    if (step === "choice") {
        return (
            <div className={styles.choice}>
                <Card className={styles.choiceCard}>
                    <div className={styles.choiceBlocks}>
                        <div className={styles.choiceBlock}>
                            <Text
                                variant="body-m"
                                className={styles.choiceBlockTitle}
                            >
                                Направления
                            </Text>
                            <div className={styles.choiceBlockIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19M6 13L12 19L18 13"
                                        stroke="#4F525A"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className={styles.choiceBlockSelect}>
                                <Text
                                    variant="body-s"
                                    className={styles.choiceBlockSelectText}
                                >
                                    Выбрать направления
                                </Text>
                                <div className={styles.choiceBlockSelectIcon}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4003_26225)">
                                            <path
                                                d="M12 7.58398L6 13.5843L8.00094 15.584L12 11.5833L15.9991 15.584L18 13.5843L12 7.58398Z"
                                                fill="#95989F"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4003_26225">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                    transform="matrix(1 0 0 -1 0 24)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.choiceBlockDropdown}>
                                    <label>
                                        <input type="checkbox" disabled />
                                        <span></span>
                                        <Text variant="body-s">
                                            Финансовая грамотность
                                        </Text>
                                    </label>
                                    <label>
                                        <input type="checkbox" disabled />
                                        <span></span>
                                        <Text variant="body-s">
                                            Управление проектами
                                        </Text>
                                    </label>
                                    <label>
                                        <input type="checkbox" disabled />
                                        <span></span>
                                        <Text variant="body-s">Экономика</Text>
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={isCybersecurityChecked}
                                            onChange={(event) =>
                                                setIsCybersecurityChecked(
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                        <span></span>
                                        <Text variant="body-s">
                                            Кибербезопасность
                                        </Text>
                                    </label>
                                    <label>
                                        <input type="checkbox" disabled />
                                        <span></span>
                                        <Text variant="body-s">
                                            Исследования
                                        </Text>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.choiceBlock}></div>
                        <div className={styles.choiceBlock}>
                            <Text
                                variant="body-m"
                                className={styles.choiceBlockTitle}
                            >
                                Формат
                            </Text>
                            <div className={styles.choiceBlockIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19M6 13L12 19L18 13"
                                        stroke="#4F525A"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.choiceBlock}>
                            <Text
                                variant="body-m"
                                className={styles.choiceBlockTitle}
                            >
                                Статус
                            </Text>
                            <div className={styles.choiceBlockIcon}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19M6 13L12 19L18 13"
                                        stroke="#4F525A"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Button
                        size="s"
                        fullWidth
                        disabled={!isCybersecurityChecked}
                        onClick={handleChoice}
                    >
                        Продолжить <ChevronRight />
                    </Button>
                </Card>
            </div>
        );
    }

    if (step === "events") {
        return (
            <div className={styles.events}>
                <Card className={styles.eventsCard}>
                    <div className={styles.filter}>
                        <Text variant="body-s">Направления</Text>
                        <div className={styles.filterBadge}>
                            <Text variant="caption">Кибербезопасность</Text>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 16L8 8M16 8L8 16"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.eventsList}>
                        <Text
                            variant="body-m"
                            className={styles.eventsListTitle}
                        >
                            Мероприятия
                        </Text>
                        <div className={styles.eventsListItems}>
                            <div className={styles.eventsListItem}>
                                <div className={styles.eventsListItemText}>
                                    <div className={styles.eventsListItemHash}>
                                        <Text variant="caption">
                                            #Кибербезопасность
                                        </Text>
                                        <Text variant="caption">#Форум</Text>
                                        <Text variant="caption">#Оффлайн</Text>
                                    </div>
                                    <Text
                                        variant="body-m"
                                        className={styles.eventsListItemTitle}
                                    >
                                        <div>
                                            Конференция GLOBAL <br /> TЕCH FORUM
                                            2026
                                        </div>
                                    </Text>
                                </div>
                                <div className={styles.eventsListItemImage}>
                                    <img src={eventsListItem1} />
                                </div>
                            </div>
                            <div className={styles.eventsListItem}>
                                <div className={styles.eventsListItemText}>
                                    <div className={styles.eventsListItemHash}>
                                        <Text variant="caption">
                                            #Кибербезопасность
                                        </Text>
                                        <Text variant="caption">#Воркшоп</Text>
                                        <Text variant="caption">#Онлайн</Text>
                                    </div>
                                    <Text
                                        variant="body-m"
                                        className={styles.eventsListItemTitle}
                                    >
                                        Международняя летняя онлайн-школа
                                        финансовой разведки
                                    </Text>
                                </div>
                                <div className={styles.eventsListItemImage}>
                                    <img src={eventsListItem2} />
                                </div>
                            </div>
                            <div className={styles.eventsListItem}>
                                <div className={styles.eventsListItemText}>
                                    <div className={styles.eventsListItemHash}>
                                        <Text variant="caption">
                                            #Кибербезопасность
                                        </Text>
                                        <Text variant="caption">
                                            #Конференция
                                        </Text>
                                        <Text variant="caption">#Оффлайн</Text>
                                    </div>
                                    <Text
                                        variant="body-m"
                                        className={styles.eventsListItemTitle}
                                    >
                                        Уральский форум «Кибербезопасность в
                                        финансах»
                                    </Text>
                                </div>
                                <div className={styles.eventsListItemImage}>
                                    <img src={eventsListItem3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button size="s" fullWidth onClick={handleComplete}>
                        Продолжить <ChevronRight />
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className={`${styles.intro}`}>
            <Card className={`${styles.introCard}`}>
                <CardTitle>Будь в курсе ярких событий платформы</CardTitle>
                <CardCards direction="vertical">
                    <CardsCard
                        direction="horizontal"
                        fill
                        icon={
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6667 26.667H21.3333L16 20.0003L10.6667 26.667Z"
                                    fill="#1D5184"
                                />
                                <path
                                    d="M24 22.667C25.2425 22.667 25.8638 22.667 26.3538 22.464C27.0072 22.1934 27.5262 21.6742 27.7969 21.0208C27.9999 20.5308 28 19.9094 28 18.6669V10.9336C28 9.44012 28.0003 8.69348 27.7096 8.12305C27.454 7.62128 27.0455 7.2133 26.5437 6.95764C25.9733 6.66699 25.2271 6.66699 23.7336 6.66699H8.26693C6.77345 6.66699 6.02616 6.66699 5.45573 6.95764C4.95396 7.2133 4.54631 7.62128 4.29065 8.12305C4 8.69348 4 9.44012 4 10.9336V18.6669C4 19.9094 4 20.5308 4.20299 21.0208C4.47364 21.6742 4.99243 22.1934 5.64583 22.464C6.13589 22.667 6.75715 22.667 7.99966 22.667M21.3333 26.667H10.6667L16 20.0003L21.3333 26.667Z"
                                    stroke="#1D5184"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                    >
                        Смотри анонсы конференций, мастер-классов, дней открытых
                        дверей и стажировок
                    </CardsCard>
                    <CardsCard
                        direction="horizontal"
                        fill
                        icon={
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.6668 8.44932V7.46631C26.6668 6.71957 26.6663 6.34625 26.521 6.06104C26.3932 5.81015 26.1902 5.60616 25.9393 5.47833C25.6541 5.33301 25.2797 5.33301 24.533 5.33301H7.46631C6.71957 5.33301 6.34658 5.33301 6.06136 5.47833C5.81048 5.60616 5.60665 5.81015 5.47882 6.06104C5.3335 6.34625 5.3335 6.71957 5.3335 7.46631V8.44932C5.3335 8.77544 5.3335 8.93856 5.37034 9.09201C5.403 9.22806 5.45701 9.35808 5.53011 9.47738C5.61254 9.61189 5.72782 9.72717 5.95828 9.95763L5.9585 9.95785L12.7088 16.7082C12.9394 16.9388 13.0544 17.0541 13.1369 17.1886C13.21 17.3079 13.2644 17.438 13.297 17.5741C13.3335 17.7259 13.3335 17.8872 13.3335 18.2067V18.2166V24.5478C13.3335 25.6908 13.3335 26.2623 13.5742 26.6065C13.7844 26.907 14.1087 27.1078 14.4715 27.1614C14.887 27.2228 15.3984 26.9672 16.4207 26.456L17.4874 25.9227C17.9155 25.7086 18.1293 25.6016 18.2856 25.4419C18.4239 25.3007 18.5295 25.1305 18.5939 24.9437C18.6668 24.7324 18.6668 24.4931 18.6668 24.0145V18.2166C18.6668 17.8905 18.6668 17.7275 18.7037 17.5741C18.7363 17.438 18.7903 17.3079 18.8634 17.1886C18.9459 17.0541 19.0611 16.9389 19.2915 16.7085L19.2918 16.7082L26.0422 9.95785C26.2728 9.72724 26.3877 9.61193 26.4702 9.47738C26.5433 9.35808 26.5977 9.22806 26.6304 9.09201C26.6668 8.94013 26.6668 8.77876 26.6668 8.45924V8.44932Z"
                                    stroke="#1D5184"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                    >
                        Фильтруй события по теме и формату
                    </CardsCard>
                    <CardsCard
                        direction="horizontal"
                        fill
                        icon={
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 10.9264C13.3333 4.66715 4 5.33382 4 13.3339C4 21.3339 16 28.0005 16 28.0005C16 28.0005 28 21.3339 28 13.3339C28 5.33382 18.6667 4.66715 16 10.9264Z"
                                    stroke="#1D5184"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                    >
                        Выбирай мероприятия, на которые хочешь пойти
                    </CardsCard>
                </CardCards>
                <Button size="s" fullWidth onClick={handleStart}>
                    Продолжить <ChevronRight />
                </Button>
            </Card>
        </div>
    );
}
