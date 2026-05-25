import clsx from "clsx";
import styles from "./Footer.module.css";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

type Props = {
    theme?: "dark" | "light";
    className?: string;
};

export const Footer = ({ theme = "dark", className }: Props) => {
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
                    <Button variant="secondary" size="xs">
                        Закончить игру
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 6L12 9L9 12M12 9L1 9M1 14C1 14.9319 1 15.3978 1.15224 15.7654C1.35523 16.2554 1.74481 16.6448 2.23486 16.8478C2.6024 17 3.06812 17 4 17H13.8C14.9201 17 15.48 17 15.9078 16.782C16.2841 16.5902 16.5905 16.2844 16.7822 15.908C17.0002 15.4802 17 14.9201 17 13.8V4.19995C17 3.07985 17.0002 2.51986 16.7822 2.09204C16.5905 1.71572 16.2841 1.40973 15.9078 1.21799C15.48 1 14.9201 1 13.8 1H4C3.06812 1 2.60241 1 2.23486 1.15224C1.74481 1.35523 1.35523 1.74456 1.15224 2.23462C1 2.60216 1 3.0681 1 3.99999"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Button>
                    <Button size="xs">Получить мерч</Button>
                    <Text
                        variant="caption"
                        className={styles.footerButtonsText}
                    >
                        Регистрируйся на платформе и получай стильный мерч от
                        ПСБ банка
                    </Text>
                </div>
                {theme === "dark" ? (
                    <img
                        src="/images/components/footer/logo-light.svg"
                        alt={"Логотип"}
                    />
                ) : (
                    <img
                        src="/images/components/footer/logo-dark.svg"
                        alt={"Логотип"}
                    />
                )}
            </div>
        </div>
    );
};
