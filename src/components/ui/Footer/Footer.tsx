import clsx from "clsx";
import styles from "./Footer.module.css";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

import logoDark from "../../../assets/images/components/footer/logo-dark.svg";
import logoLight from "../../../assets/images/components/footer/logo-light.svg";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/useAppStore";
import { LogOut } from "lucide-react";

type Props = {
    theme?: "dark" | "light";
    className?: string;
};

export const Footer = ({ theme = "dark", className }: Props) => {
    const navigate = useNavigate();
    const { setActiveLocation, clearCompletedLocation, openModal } =
        useAppStore();

    const handleExit = () => {
        navigate("/");
        setActiveLocation(null);
        clearCompletedLocation();
    };

    return (
        <div
            className={clsx(
                styles.footer,
                theme === "light" && styles.footerLight,
                className,
            )}
        >
            <div className={clsx("container", styles.footerContainer)}>
                <div className={styles.footerButtons}>
                    <Button variant="secondary" size="xs" onClick={handleExit}>
                        Закончить игру
                        <LogOut />
                    </Button>
                    <Button size="xs" onClick={() => openModal("merch")}>
                        Получить мерч
                    </Button>
                    <Text
                        variant="caption"
                        className={styles.footerButtonsText}
                    >
                        Регистрируйся на платформе и получай стильный мерч от
                        ПСБ
                    </Text>
                </div>
                {theme === "dark" ? (
                    <img src={logoLight} alt={"Логотип"} />
                ) : (
                    <img src={logoDark} alt={"Логотип"} />
                )}
            </div>
        </div>
    );
};
