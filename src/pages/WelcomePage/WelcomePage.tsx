import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Footer } from "../../components/ui/Footer/Footer";
import { Message, MessageTitle } from "../../components/ui/Message/Message";
import { Text } from "../../components/ui/Text/Text";
import styles from "./WelcomePage.module.css";
import clsx from "clsx";
import data from "../../data/data";

import clauds from "../../assets/video/welcome/clauds.webm";
import reviewCard1 from "../../assets/images/city/welcome/welcome-page-review-card-1.png";
import reviewCard2 from "../../assets/images/city/welcome/welcome-page-review-card-2.png";
import reviewCard3 from "../../assets/images/city/welcome/welcome-page-review-card-3.png";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { publishBroadcastState } from "../../utils/broadcast";
import { startGameStats } from "../../utils/gameStats";

type Step = "start" | "overview" | "review" | "choice";
const startVideoDelay = 3000;
const startFadeDuration = 1000;

function WelcomePage() {
    const navigate = useNavigate();
    const { setStarted, setPerson } = useAppStore();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [step, setStep] = useState<Step>("start");
    const [isStartLeaving, setIsStartLeaving] = useState(false);
    const [selectedPersonId, setSelectedPersonId] = useState<string | null>(
        null,
    );
    const startFadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );
    const overviewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            void videoRef.current.play();
        }

        if (overviewTimerRef.current) {
            clearTimeout(overviewTimerRef.current);
        }
        if (startFadeTimerRef.current) {
            clearTimeout(startFadeTimerRef.current);
        }

        startFadeTimerRef.current = setTimeout(() => {
            setIsStartLeaving(true);
        }, startVideoDelay);

        overviewTimerRef.current = setTimeout(() => {
            setStep("review");
            setIsStartLeaving(false);
        }, startVideoDelay + startFadeDuration);
    };

    const handleReviewMessage = () => {
        setStep("choice");
        publishBroadcastState({ screen: "choice" });
    };

    const handleSelectPerson = (personId: string) => {
        setSelectedPersonId(personId);
    };

    const handleStartGame = () => {
        const selectedPerson =
            data.persons.find((p) => p.id === selectedPersonId) || null;

        if (selectedPerson) {
            setPerson(selectedPerson);
            setStarted(true);
            startGameStats(selectedPerson.id);
        }

        navigate("/map");
    };

    useEffect(() => {
        publishBroadcastState({ screen: "main" });

        return () => {
            if (startFadeTimerRef.current) {
                clearTimeout(startFadeTimerRef.current);
            }
            if (overviewTimerRef.current) {
                clearTimeout(overviewTimerRef.current);
            }
        };
    }, []);

    const isSelected = selectedPersonId !== null;

    return (
        <div className={styles.welcomePage}>
            <div
                className={clsx(
                    styles.welcomePageStep,
                    styles.welcomePageStart,
                    isStartLeaving && styles.welcomePageStartLeaving,
                    step !== "start" && styles.welcomePageStepHide,
                )}
            >
                <div className={clsx(styles.welcomePageStartClauds)}>
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        className={styles.welcomePageStartClaudsVideo}
                        src={clauds}
                    ></video>
                    {/* <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsLeftTop,
            )}
            src={cloudLeftTop}
            alt={"Облако"}
          />
          <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsLeftCenter,
            )}
            src={cloudLeftCenter}
            alt={"Облако"}
          />
          <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsLeftBottom,
            )}
            src={cloudLeftBottom}
            alt={"Облако"}
          />
          <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsRightTop,
            )}
            src={cloudRightTop}
            alt={"Облако"}
          />
          <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsRightCenter,
            )}
            src={cloudRightCenter}
            alt={"Облако"}
          />
          <img
            className={clsx(
              styles.welcomePageStartClaudsItem,
              styles.welcomePageStartClaudsRightBottom,
            )}
            src={cloudRightBottom}
            alt={"Облако"}
          /> */}
                </div>
                <div className={styles.welcomePageStartHeader}>
                    <Text
                        variant="display"
                        className={styles.welcomePageStartHeaderTitle}
                    >
                        Город Cодружества
                    </Text>
                    <Text
                        variant="h2"
                        className={styles.welcomePageStartHeaderSubtitle}
                    >
                        Пространство для твоего развития
                    </Text>
                </div>
                <Button onClick={handleStart}>Начать</Button>
            </div>
            <div
                className={clsx(
                    styles.welcomePageStep,
                    styles.welcomePageOverview,
                    step !== "overview" && styles.welcomePageStepHide,
                )}
            >
                <Text variant="h1">Добро пожаловать в Город Cодружества</Text>
            </div>

            <div
                className={clsx(
                    "bg layout",
                    styles.welcomePageStep,
                    styles.welcomePageLayout,
                    step !== "review" &&
                        step !== "choice" &&
                        styles.welcomePageStepHide,
                )}
            >
                <div className={clsx(styles.welcomePageLayoutWrapper)}>
                    {/* Step 3: Review */}
                    <div
                        className={clsx(
                            "container",
                            styles.welcomePageStep,
                            styles.welcomePageReview,
                            step !== "review" && styles.welcomePageStepHide,
                        )}
                    >
                        <div className={clsx(styles.welcomePageReviewCards)}>
                            <div
                                className={clsx(
                                    styles.welcomePageReviewCardsItem,
                                )}
                                style={{
                                    backgroundImage: `url(${reviewCard1})`,
                                }}
                            >
                                <Text
                                    variant="body-l"
                                    className={clsx(
                                        styles.welcomePageReviewCardsItemText,
                                    )}
                                >
                                    Здесь есть всё для вашего профессионального
                                    роста и развития в финансовой безопасности и
                                    смежных сферах
                                </Text>
                            </div>
                            <div
                                className={clsx(
                                    styles.welcomePageReviewCardsItem,
                                )}
                                style={{
                                    backgroundImage: `url(${reviewCard2})`,
                                }}
                            >
                                <Text
                                    variant="body-l"
                                    className={clsx(
                                        styles.welcomePageReviewCardsItemText,
                                    )}
                                >
                                    Мы поможем раскрыть талант, построить
                                    карьеру, реализовать экспертизу, найти
                                    партнёров, единомышленников и наставников
                                </Text>
                            </div>
                            <div
                                className={clsx(
                                    styles.welcomePageReviewCardsItem,
                                )}
                                style={{
                                    backgroundImage: `url(${reviewCard3})`,
                                }}
                            >
                                <Text
                                    variant="body-l"
                                    className={clsx(
                                        styles.welcomePageReviewCardsItemText,
                                    )}
                                >
                                    Курсы, олимпиады, живое общение, нетворкинг
                                    — всё, чтобы каждый нашёл свой путь
                                </Text>
                            </div>
                        </div>

                        <Message
                            theme="light"
                            onClick={handleReviewMessage}
                            style={{ cursor: "pointer" }}
                        >
                            <MessageTitle>
                                Давайте отправимся в путешествие — и узнаем, что
                                вас ждёт
                            </MessageTitle>
                        </Message>
                    </div>

                    {/* Step 4: Choice */}
                    <div
                        className={clsx(
                            "container",
                            styles.welcomePageStep,
                            styles.welcomePageChoice,
                            isSelected && styles.welcomePageChoiceSelected,
                            step !== "choice" && styles.welcomePageStepHide,
                        )}
                    >
                        <div className={clsx(styles.welcomePageChoiceHeader)}>
                            <Text variant="h3">
                                Но сперва нужно познакомиться,
                            </Text>
                            <Text variant="h2">выберите роль:</Text>
                        </div>
                        <div className={clsx(styles.welcomePageChoiceCards)}>
                            {data.persons.map((person) => (
                                <div
                                    key={person.id}
                                    className={clsx(
                                        styles.welcomePageChoiceCardsItem,
                                        selectedPersonId === person.id &&
                                            styles.welcomePageChoiceCardsItemActive,
                                    )}
                                    onClick={() =>
                                        handleSelectPerson(person.id)
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <Text
                                        variant="h3"
                                        className={clsx(
                                            styles.welcomePageChoiceCardsItemRole,
                                        )}
                                    >
                                        {person.role}
                                    </Text>
                                    <Text
                                        variant="h4"
                                        className={clsx(
                                            styles.welcomePageChoiceCardsItemName,
                                        )}
                                    >
                                        {person.name}
                                    </Text>
                                    <img
                                        src={person.welcome}
                                        alt={person.name}
                                        className={clsx(
                                            styles.welcomePageChoiceCardsItemImage,
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={clsx(styles.welcomePageChoiceMessage)}>
                            <Message theme="light" onClick={handleStartGame}>
                                <MessageTitle>
                                    Отлично! Если определился с ролью, начнем
                                    наш путь
                                </MessageTitle>
                            </Message>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default WelcomePage;
