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
import { type Data } from "../../../data/data";

type ReplyProps = {
    onClick?: () => void;
    align?: Data["data"]["persons"][number]["replies"]["align"];
    message?: "default" | "aside";
    reply: Data["data"]["persons"][number]["replies"]["start"][number];
};

export function Reply({
    align = "left",
    message = "aside",
    reply,
    onClick,
}: ReplyProps) {
    return (
        <div className={clsx(styles.reply, styles[align], styles[message])}>
            <Message className={clsx(styles.replyMessage)}>
                {reply.title && <MessageTitle>{reply.title}</MessageTitle>}
                {reply.text && <MessageText>{reply.text}</MessageText>}
                {reply.action && <MessageAction>{reply.action}</MessageAction>}
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
            </Message>
            <img
                src={reply.image}
                alt={"Персонаж"}
                className={clsx(styles.replyImage)}
            />
        </div>
    );
}
