import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";
type Size = "m" | "s" | "xs" | "icon-m" | "icon-s" | "icon-xs";

type Props = {
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
    variant = "primary",
    size = "m",
    fullWidth = false,
    children,
    className,
    ...rest
}: Props) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                fullWidth && styles.fullWidth,
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
