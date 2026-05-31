import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Message.module.css";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { ChevronRight } from "lucide-react";
import { useAppStore, type ModalType } from "../../../store/useAppStore";

type Theme = "dark" | "light";
type ButtonAlign = "left" | "center" | "right" | "fullWidth";

const modalLinkPattern = /\[\[modal:([a-z-]+)\|([^\]]+)]]/g;

type ModalLinkProps = {
    modal: ModalType;
    children: ReactNode;
};

const ModalLink = ({ modal, children }: ModalLinkProps) => {
    const { openModal } = useAppStore();

    return (
        <button
            type="button"
            className={styles.messageModalLink}
            onClick={(event) => {
                event.stopPropagation();
                openModal(modal);
            }}
        >
            {children}
        </button>
    );
};

const renderInlineText = (text: string, keyPrefix: string) => {
    const parts: ReactNode[] = [];
    let lastIndex = 0;

    text.replace(modalLinkPattern, (match, modal, label, offset) => {
        if (offset > lastIndex) {
            parts.push(text.slice(lastIndex, offset));
        }

        parts.push(
            <ModalLink
                key={`${keyPrefix}-modal-${offset}`}
                modal={modal as ModalType}
            >
                {label}
            </ModalLink>,
        );
        lastIndex = offset + match.length;
        return match;
    });

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

const renderFormattedText = (children: ReactNode) => {
    if (typeof children !== "string") return children;

    return children.split("\n").map((line, lineIndex, lines) => {
        if (line === "") {
            return (
                <span
                    key={lineIndex}
                    className={styles.formattedParagraphGap}
                />
            );
        }

        const parts = line.split(/(\*\*[^*]+\*\*)/g);

        const lineStartsWithStrong = line.trimStart().startsWith("**");
        const previousLineIsEmpty = lines[lineIndex - 1] === "";
        const firstStrongPartIndex = parts.findIndex(
            (part) => part.startsWith("**") && part.endsWith("**"),
        );

        return (
            <span key={lineIndex}>
                {parts.map((part, partIndex) => {
                    const isStrong =
                        part.startsWith("**") && part.endsWith("**");

                    return isStrong ? (
                        <strong
                            key={partIndex}
                            className={clsx(
                                lineIndex === 0 &&
                                    lines.length > 1 &&
                                    lineStartsWithStrong &&
                                    partIndex === firstStrongPartIndex &&
                                    styles.formattedStrongFirstLine,
                                lineIndex > 0 &&
                                    lineStartsWithStrong &&
                                    !previousLineIsEmpty &&
                                    partIndex === firstStrongPartIndex &&
                                    styles.formattedStrongNewLine,
                            )}
                        >
                            {renderInlineText(
                                part.slice(2, -2),
                                `${lineIndex}-${partIndex}-strong`,
                            )}
                        </strong>
                    ) : (
                        <span key={partIndex}>
                            {renderInlineText(
                                part,
                                `${lineIndex}-${partIndex}`,
                            )}
                        </span>
                    );
                })}
                {lineIndex < lines.length - 1 &&
                    lines[lineIndex + 1] !== "" && <br />}
            </span>
        );
    });
};

type MessageTitleProps = { children: ReactNode; className?: string };

export const MessageTitle = ({ children, className }: MessageTitleProps) => (
    <Text variant="body-l" className={clsx(styles.messageTitle, className)}>
        {renderFormattedText(children)}
    </Text>
);

type MessageTextProps = { children: ReactNode; className?: string };

export const MessageText = ({ children, className }: MessageTextProps) => (
    <Text variant="body-m" className={clsx(styles.messageText, className)}>
        {renderFormattedText(children)}
    </Text>
);

type MessageActionProps = { children: ReactNode; className?: string };

export const MessageAction = ({ children, className }: MessageActionProps) => (
    <Text variant="caption-2" className={clsx(styles.messageAction, className)}>
        {renderFormattedText(children)}
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
        {renderFormattedText(children)}
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
