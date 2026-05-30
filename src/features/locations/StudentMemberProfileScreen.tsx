import { useState } from "react";
import type { LocationScreenProps } from "./types";
import styles from "./StudentMemberProfileLocation.module.css";

import { Button } from "../../components/ui/Button/Button";
import { ChevronRight } from "lucide-react";

import screen from "../../assets/images/city/locations/member-profile/screen.png";
import avatar1 from "../../assets/images/city/locations/member-profile/avatar-1.png";
import avatar2 from "../../assets/images/city/locations/member-profile/avatar-2.png";
import avatar3 from "../../assets/images/city/locations/member-profile/avatar-3.png";
import { Text } from "../../components/ui/Text/Text";
import clsx from "clsx";

export function StudentMemberProfileScreen({
    person,
    setReply,
    completeLocation,
    closeLocation,
}: LocationScreenProps) {
    const [step, setStep] = useState<"intro" | "profiles">("intro");

    const handleStart = () => {
        setReply({
            image: person.image,
            text: "**О, нашли совпадения!**\nАлгоритм платформы ориентируется на твой профиль и подбирает людей с интересами и проектами, которые могут тебе подойти. А заполнить его можно за пару минут",
        });

        setStep("profiles");
    };

    const handleComplete = () => {
        completeLocation();
        closeLocation();
    };

    if (step === "profiles") {
        return (
            <div className={`${styles.intro}`}>
                <div className={`${styles.screen}`}>
                    <img src={screen} />
                </div>
                <div className={`${clsx(styles.avatar, styles.avatar1)}`}>
                    <img src={avatar1} />
                    <div className={`${styles.avatarText}`}>
                        <Text
                            variant="body-s"
                            className={`${styles.avatarTitle}`}
                        >
                            Кирилл
                        </Text>
                        <Text
                            variant="caption"
                            className={`${styles.avatarSubtitle}`}
                        >
                            учится с тобой на одном направлении
                        </Text>
                    </div>
                </div>
                <div className={clsx(`${styles.avatar}`, `${styles.avatar2}`)}>
                    <img src={avatar2} />
                    <div className={`${styles.avatarText}`}>
                        <Text
                            variant="body-s"
                            className={`${styles.avatarTitle}`}
                        >
                            Александр
                        </Text>
                        <Text
                            variant="caption"
                            className={`${styles.avatarSubtitle}`}
                        >
                            тоже принимал участие в Олимпиаде в Узбекистане
                        </Text>
                    </div>
                </div>
                <div className={clsx(`${styles.avatar}`, `${styles.avatar3}`)}>
                    <img src={avatar3} />
                    <div className={`${styles.avatarText}`}>
                        <Text
                            variant="body-s"
                            className={`${styles.avatarTitle}`}
                        >
                            Татьяна
                        </Text>
                        <Text
                            variant="caption"
                            className={`${styles.avatarSubtitle}`}
                        >
                            работает в нужной тебе компании
                        </Text>
                    </div>
                </div>
                <Button size="s" onClick={handleComplete}>
                    Продолжить <ChevronRight />
                </Button>
            </div>
        );
    }

    return (
        <div className={`${styles.intro}`}>
            <div className={`${styles.screen}`}>
                <img src={screen} />
            </div>
            <Button size="s" onClick={handleStart}>
                Продолжить <ChevronRight />
            </Button>
        </div>
    );
}
