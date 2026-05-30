import clsx from "clsx";

import styles from "./Reply.module.css";
import {
    Message,
    MessageAction,
    MessageRow,
    MessageRowTitle,
    MessageText,
    MessageTitle,
} from "../Message/Message";
import { Button } from "../Button/Button";
import type { PersonData, ReplyData } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/useAppStore";

import qr from "../../../assets/images/components/modal/qr-white.png";
import qrFooter from "../../../assets/images/components/modal/qr-footer.png";
import achivemnt from "../../../assets/images/components/final/achivment.png";

import { Text } from "../Text/Text";

type ReplyProps = {
    onClick?: () => void;
    align?: PersonData["replies"]["align"];
    message?: "default" | "aside";
    placement?: "map" | "location";
    final?: boolean;
    maxWidth?: number;
    reply: ReplyData;
};

export function Reply({
    align = "left",
    message = "aside",
    placement,
    final = false,
    maxWidth,
    reply,
    onClick,
}: ReplyProps) {
    const navigate = useNavigate();
    const { setActiveLocation, clearCompletedLocation } = useAppStore();

    const handleExit = () => {
        navigate("/", { replace: true });
        window.setTimeout(() => {
            setActiveLocation(null);
            clearCompletedLocation();
        }, 0);
    };

    return (
        <div
            className={clsx(
                styles.reply,
                styles[align],
                styles[message],
                placement && styles[placement],
                final && styles.final,
            )}
        >
            <Message
                className={clsx(styles.replyMessage, reply.messageClassName)}
                style={maxWidth ? { maxWidth: `${maxWidth}px`, ...reply.messageStyle } : {}}
            >
                {!final ? (
                    <>
                        {reply.title && (
                            <MessageTitle>{reply.title}</MessageTitle>
                        )}
                        {reply.text && <MessageText>{reply.text}</MessageText>}
                        {reply.action && (
                            <MessageAction>{reply.action}</MessageAction>
                        )}
                        {reply.button &&
                            (reply.button.type === "default" ? (
                                <Button size="s" fullWidth onClick={onClick}>
                                    {reply.button.text}
                                </Button>
                            ) : (
                                <div onClick={onClick}>
                                    <MessageRow>
                                        <MessageRowTitle>
                                            {reply.button.text}
                                        </MessageRowTitle>
                                    </MessageRow>
                                </div>
                            ))}
                    </>
                ) : (
                    <>
                        <div className={styles.finalText}>
                            {reply.title && (
                                <MessageTitle>{reply.title}</MessageTitle>
                            )}
                            {reply.text && (
                                <MessageText>{reply.text}</MessageText>
                            )}
                            <Button
                                className={styles.finalButton}
                                onClick={handleExit}
                                variant="secondary"
                                size="xs"
                            >
                                Вернуться на главный экран
                            </Button>
                        </div>
                        <div className={styles.qr}>
                            <img src={qr} className={styles.qrImage} />
                            <Text variant="body-m">sodrujestvo.org/ru</Text>
                            <img src={qrFooter} className={styles.qrFooter} />
                        </div>
                        <img src={achivemnt} className={styles.achivment} />
                    </>
                )}
            </Message>
            <img
                src={reply.image}
                alt={"Персонаж"}
                className={clsx(styles.replyImage)}
                style={reply.imageStyle}
            />
        </div>
    );
}
