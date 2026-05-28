import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card, CardTitle } from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./SpaceCommonwealthLocation.module.css";
import { ChevronRight } from "lucide-react";

import newPostVideo from "../../assets/videos/city/locations/new_post.webm";
import joinCommunityVideo from "../../assets/videos/city/locations/join_community.webm";
import createCommunityVideo from "../../assets/videos/city/locations/create_community.webm";

type VideoStep = "new_post" | "join_community" | "create_community";

export function SpaceCommonwealthScreen({
    setReply,
    person,
    completeLocation,
    closeLocation,
}: LocationScreenProps) {
    const [step, setStep] = useState<"buttons" | VideoStep>("buttons");

    const handleVideoSelect = (selected: VideoStep, replyText: string) => {
        setStep(selected);
        setReply({ image: person.image, text: replyText });
    };

    const handleBack = () => {
        setStep("buttons");
    };

    const handleContinue = () => {
        completeLocation();
        closeLocation();
    };

    const videoSrc: Record<VideoStep, string> = {
        new_post: newPostVideo,
        join_community: joinCommunityVideo,
        create_community: createCommunityVideo,
    };

    if (step !== "buttons") {
        return (
            <div className={styles.video}>
                <div className={styles.phoneMockup}>
                    <div className={styles.phoneMockupIsland} />
                    <div className={styles.phoneMockupScreen}>
                        <video
                            key={step}
                            className={styles.videoElement}
                            src={videoSrc[step]}
                            autoPlay
                            loop
                        />
                    </div>
                </div>
                <Button
                    size="s"
                    variant="secondary"
                    className={styles.backButton}
                    onClick={handleBack}
                >
                    Назад
                </Button>
                <Button
                    size="s"
                    className={styles.continueButton}
                    onClick={handleContinue}
                >
                    Продолжить <ChevronRight />
                </Button>
            </div>
        );
    }

    return (
        <div className={styles.buttons}>
            <Card className={styles.buttonsCard}>
                <CardTitle className={styles.buttonsTitle}>
                    Выберите функцию, которая будет для вас полезной
                </CardTitle>
                <div className={styles.buttonsList}>
                    <Button
                        size="s"
                        fullWidth
                        className={styles.actionButton}
                        onClick={() =>
                            handleVideoSelect(
                                "new_post",
                                "Смотрите, как легко публиковать новый пост в Пространстве Содружество",
                            )
                        }
                    >
                        Опубликовать новый пост <ChevronRight />
                    </Button>
                    <Button
                        size="s"
                        fullWidth
                        className={styles.actionButton}
                        onClick={() =>
                            handleVideoSelect(
                                "join_community",
                                "Присоединяйтесь к сообществам единомышленников!",
                            )
                        }
                    >
                        Вступить в сообщество <ChevronRight />
                    </Button>
                    <Button
                        size="s"
                        fullWidth
                        className={styles.actionButton}
                        onClick={() =>
                            handleVideoSelect(
                                "create_community",
                                "Создайте своё сообщество и объединяйте экспертов",
                            )
                        }
                    >
                        Создать свое сообщество <ChevronRight />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
