import { useState } from "react";
import { Card, CardTitle } from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./SpaceCommonwealthLocation.module.css";

import { Button } from "../../components/ui/Button/Button";
import { ChevronRight } from "lucide-react";

import publishVideo from "../../assets/video/space-commonwealth/publish.webm";
import inviteVideo from "../../assets/video/space-commonwealth/invite.webm";
import createVideo from "../../assets/video/space-commonwealth/create.webm";

export function StudentSpaceCommonwealthScreen({
    person,
    setReply,
    completeLocation,
    closeLocation,
}: LocationScreenProps) {
    const [step, setStep] = useState<"intro" | "publish" | "invite" | "create">(
        "intro",
    );

    const handleVideo = (step: "intro" | "publish" | "invite" | "create") => {
        if (step === "publish") {
            setReply({
                image: person.image,
                text: "Ты можешь писать в ленте на любую интересную тебе тему. Делиться опытом, задавать вопросы или просто рассказывать о том, что волнует",
            });
        }

        if (step === "invite") {
            setReply({
                image: person.image,
                text: "В Содружестве много сообществ, ты точно найдёшь что-то по душе",
            });
        }

        if (step === "create") {
            setReply({
                image: person.image,
                text: "Если не нашёл подходящее — создай своё сообщество\n**Объединяй единомышленников, запускай проекты и находи партнёров**",
            });
        }

        setStep(step);
    };

    const handleComplete = () => {
        completeLocation();
        closeLocation();
    };

    if (step === "publish" || step === "invite" || step === "create") {
        return (
            <div className={styles.video}>
                <div className={styles.videoPlayer}>
                    {step === "publish" && (
                        <video
                            src={publishVideo}
                            autoPlay
                            muted
                            playsInline
                            loop
                        ></video>
                    )}
                    {step === "invite" && (
                        <video
                            src={inviteVideo}
                            autoPlay
                            muted
                            playsInline
                            loop
                        ></video>
                    )}
                    {step === "create" && (
                        <video
                            src={createVideo}
                            autoPlay
                            muted
                            playsInline
                            loop
                        ></video>
                    )}
                </div>
                <Button size="s" onClick={handleComplete}>
                    Продолжить
                    <ChevronRight />
                </Button>
            </div>
        );
    }

    return (
        <div className={`${styles.intro}`}>
            <Card className={`${styles.introCard}`}>
                <CardTitle>
                    С какой из функций ты хочешь познакомиться ближе?
                </CardTitle>
                <div className={`${styles.introButtons}`}>
                    <Button
                        size="s"
                        fullWidth
                        onClick={() => handleVideo("publish")}
                    >
                        Опубликовать новый пост <ChevronRight />
                    </Button>
                    <Button
                        size="s"
                        fullWidth
                        onClick={() => handleVideo("invite")}
                    >
                        Вступить в сообщество <ChevronRight />
                    </Button>
                    <Button
                        size="s"
                        fullWidth
                        onClick={() => handleVideo("create")}
                    >
                        Создать свое сообщество <ChevronRight />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
