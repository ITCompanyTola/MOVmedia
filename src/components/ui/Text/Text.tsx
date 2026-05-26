import clsx from "clsx";
import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type Variant =
    | "display"
    | "h1"
    | "h2"
    | "h2-bold"
    | "h3"
    | "h4"
    | "subtitle"
    | "body-l"
    | "body-m"
    | "body-s"
    | "body-m-2"
    | "caption"
    | "caption-2";

type Props<T extends ElementType = "p"> = {
    variant?: Variant;
    as?: T;
    children?: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const Text = <T extends ElementType = "p">({
    variant = "body-m",
    as,
    children,
    className,
    ...rest
}: Props<T>) => {
    const Tag = (as ?? "p") as ElementType;
    return (
        <Tag
            className={clsx(variant && `text-${variant}`, className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};
