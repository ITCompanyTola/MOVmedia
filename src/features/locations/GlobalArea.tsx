import { useLayoutEffect, useRef, useState } from "react";
import styles from "./GlobalArea.module.css";

import globalAreaBackground from "../../assets/images/components/globalArea/background.svg";
import clsx from "clsx";

import avatar4 from "../../assets/images/components/globalArea/avatar-4.png";
import avatar5 from "../../assets/images/components/globalArea/avatar-5.png";
import avatar6 from "../../assets/images/components/globalArea/avatar-6.png";
import marina from "../../assets/images/components/globalArea/marina.png";
import russia from "../../assets/images/components/globalArea/russia.png";
import maksim from "../../assets/images/components/globalArea/maksim.png";
import belarus from "../../assets/images/components/globalArea/belarus.png";
import muhamed from "../../assets/images/components/globalArea/muhamed.png";
import oae from "../../assets/images/components/globalArea/oae.png";
import aibek from "../../assets/images/components/globalArea/aibek.png";
import kyr from "../../assets/images/components/globalArea/kyr.png";

import { Text } from "../../components/ui/Text/Text";
import { ChevronDown } from "lucide-react";

const profiles: GlobalAeraProfile[] = [
    {
        position: [694, 215],
        avatar: avatar4,
    },
    {
        position: [339, 373],
        avatar: avatar5,
    },
    {
        position: [982, 350],
        avatar: avatar6,
    },
    {
        position: [469, 12],
        avatar: marina,
        name: "Марина",
        country: "Россия",
        flag: russia,
        track: "Спортивный трек",
        description: "Участвует в челленджах вместе с единомышленниками",
    },
    {
        position: [132, 210],
        avatar: maksim,
        name: "Максим",
        country: "Беларусь",
        flag: belarus,
        track: "Духовно-нравственный трек",
        description: "Ценит честность, ответственность и гражданскую позицию",
    },
    {
        position: [866, 168],
        avatar: muhamed,
        name: "Мухаммед",
        country: "ОАЭ",
        flag: oae,
        track: "Образовательный трек",
        description:
            "Решил 20+ практических кейсов по борьбе с экономическими преступлениями",
    },
    {
        position: [534, 367],
        avatar: aibek,
        name: "Айбек",
        country: "Кыргызстан",
        flag: kyr,
        track: "Профессиональный трек",
        description: "Мечтает стать финансовым аналитиком",
    },
];

type GlobalAeraProfile = {
    avatar: string;
    position: [number, number];
    name?: string;
    country?: string;
    flag?: string;
    track?: string;
    description?: string;
};

type GlobalAeraProfileViewProps = {
    profile: GlobalAeraProfile;
    open: boolean;
    onClick: () => void;
};

function GlobalAeraProfileView({
    profile,
    open,
    onClick,
}: GlobalAeraProfileViewProps) {
    const headerRef = useRef<HTMLButtonElement>(null);
    const [headerWidth, setHeaderWidth] = useState<number | null>(null);
    const canOpen = Boolean(profile.description);

    useLayoutEffect(() => {
        if (!open || !headerRef.current) return;

        setHeaderWidth(headerRef.current.offsetWidth);
    }, [open, profile.name, profile.country, profile.track]);

    return (
        <div
            className={clsx(
                styles.profile,
                profile.name && styles.full,
                open && styles.open,
            )}
            style={{
                left: `${profile.position[0]}px`,
                top: `${profile.position[1]}px`,
                width:
                    open && headerWidth ? `${headerWidth + 32}px` : undefined,
            }}
        >
            <button
                ref={headerRef}
                type="button"
                className={styles.profileHeader}
                onClick={canOpen ? onClick : undefined}
                disabled={!canOpen}
            >
                <img
                    className={styles.profileHeaderAvatar}
                    src={profile.avatar}
                    alt="Аватар"
                />
                <div className={styles.profileHeaderInfo}>
                    <div className={styles.profileHeaderInfoTop}>
                        <Text
                            variant="body-s"
                            className={styles.profileHeaderInfoName}
                        >
                            {profile.name}
                        </Text>
                        <div className={styles.profileHeaderInfoCountry}>
                            <Text variant="caption">{profile.country}</Text>
                            <img
                                src={profile.flag}
                                alt={profile.country}
                                className={styles.profileHeaderInfoCountryFlag}
                            />
                        </div>
                    </div>
                    <Text
                        variant="caption"
                        className={styles.profileHeaderInfoTrack}
                    >
                        {profile.track}
                    </Text>
                </div>
                {canOpen && (
                    <div className={styles.profileHeaderButton}>
                        <ChevronDown />
                    </div>
                )}
            </button>
            {open && profile.description && (
                <Text variant="caption" className={styles.profiileDescription}>
                    {profile.description}
                </Text>
            )}
        </div>
    );
}

export function GlobalArea() {
    const [openProfileId, setOpenProfileId] = useState<string | null>(null);

    return (
        <div className={styles.globalArea}>
            <img
                src={globalAreaBackground}
                alt="Фон"
                className={styles.globalAreaBackground}
            />
            {profiles.map((profile) => {
                const open = openProfileId === profile.avatar;

                return (
                    <GlobalAeraProfileView
                        key={profile.avatar}
                        profile={profile}
                        open={open}
                        onClick={() =>
                            setOpenProfileId(open ? null : profile.avatar)
                        }
                    />
                );
            })}
        </div>
    );
}
