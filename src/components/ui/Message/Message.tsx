import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Message.module.css";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { ChevronRight } from "lucide-react";

type Theme = "dark" | "light";
type ButtonAlign = "left" | "center" | "right" | "fullWidth";

type MessageTitleProps = { children: ReactNode; className?: string };

export const MessageTitle = ({ children, className }: MessageTitleProps) => (
    <Text variant="body-l" className={clsx(styles.messageTitle, className)}>
        {children}
    </Text>
);

type MessageTextProps = { children: ReactNode; className?: string };

export const MessageText = ({ children, className }: MessageTextProps) => (
    <Text variant="body-m" className={clsx(styles.messageText, className)}>
        {children}
    </Text>
);

type MessageActionProps = { children: ReactNode; className?: string };

export const MessageAction = ({ children, className }: MessageActionProps) => (
    <Text variant="caption-2" className={clsx(styles.messageAction, className)}>
        {children}
    </Text>
);

type MessageButtonProps = {
    align?: ButtonAlign;
    children: ReactNode;
    className?: string;
};

export const MessageButton = ({
    align = "left",
    children,
    className,
}: MessageButtonProps) => (
    <div className={clsx(styles.messageButton, styles[align], className)}>
        <Button size="s" fullWidth={align === "fullWidth"}>
            {children}
        </Button>
    </div>
);

type MessageRowProps = {
    children: ReactNode;
    className?: string;
};

export const MessageRow = ({ children, className }: MessageRowProps) => (
    <div className={clsx(styles.messageRow, className)}>
        {children}
        <Button size="icon-xs">
            <ChevronRight />
        </Button>
    </div>
);

type MessageRowTitleProps = { children: ReactNode; className?: string };

export const MessageRowTitle = ({
    children,
    className,
}: MessageRowTitleProps) => (
    <Text variant="body-m" className={clsx(styles.messageRowTitle, className)}>
        {children}
    </Text>
);

type MessageProps = {
    theme?: Theme;
    children: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<"div">;

export const Message = ({
    theme = "dark",
    children,
    className,
    ...rest
}: MessageProps) => (
    <div className={clsx(styles.message, styles[theme], className)} {...rest}>
        {theme !== "light" ? (
            children
        ) : (
            <>
                <div>{children}</div>
                <Button size="icon-s">
                    <ChevronRight />
                </Button>
            </>
        )}
    </div>
);
