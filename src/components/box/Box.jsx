import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils";

// TODO: need to manage these display, flexDirection, margin, padding, space, color related things in a theme which will be reusable for every component
const boxVariants = cva("", {
    variants: {
        display: {
            block: "block",
            inlineBlock: "inline-block",
            inline: "inline",
            flex: "flex",
            grid: "grid",
            inlineFlex: "inline-flex",
        },
        flexDirection: {
            row: "flex-row",
            column: "flex-col",
            rowReverse: "flex-row-reverse",
            columnReverse: "flex-col-reverse",
        },
        justifyContent: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        alignItems: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        margin: {
            Zero: "m-0",
            XXS: "m-1",
            XS: "m-2",
            S: "m-3",
            M: "m-4",
            L: "m-5",
            XL: "m-6",
            XXL: "m-8",
            XXXL: "m-12",
            XXXXL: "m-16",
        },
        padding: {
            Zero: "p-0",
            XXS: "p-1",
            XS: "p-2",
            S: "p-3",
            M: "p-4",
            L: "p-5",
            XL: "p-6",
            XXL: "p-8",
            XXXL: "p-12",
            XXXXL: "p-16",
        },
        width: {
            auto: "w-auto",
            full: "w-full",
            screen: "w-screen",
            half: "w-1/2",
            quarter: "w-1/4",
        },
        height: {
            auto: "h-auto",
            full: "h-full",
            screen: "h-screen",
        },
        gap: {
            Zero: "gap-0",
            XXS: "gap-1",
            XS: "gap-2",
            S: "gap-3",
            M: "gap-4",
            L: "gap-5",
            XL: "gap-6",
            XXL: "gap-8",
            XXXL: "gap-12",
            XXXXL: "gap-16",
        },
        bgColor: {
            transparent: "bg-transparent",
            primary: "bg-primary",
            secondary: "bg-secondary",
            accent: "bg-accent",
            danger: "bg-danger",
        },
        color: {
            primary: "text-content-primary",
        },
        border: {
            none: "border-none",
            solid: "border-solid",
            dashed: "border-dashed",
            dotted: "border-dotted",
            primary: "border-primary",
            accent: "border-accent",
            danger: "border-danger",
        },
        borderRadius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        },
        borderColor: {
            transparent: "border-transparent",
            primary: "border-primary",
            secondary: "border-secondary",
            accent: "border-line-alwaysWhite dark:border-alwaysWhite",
            danger: "border-danger",
            neutral: "border-neutral",
        },
    },
    defaultVariants: {
        display: "flex",
        margin: "Zero",
        padding: "Zero",
        width: "auto",
        height: "auto",
        bgColor: "transparent",
        color: "text-content-primary",
        border: "none",
        borderRadius: "none",
    },
});

/**
 * A `Box` component that serves as a flexible container supporting a wide range of layout and spacing properties.
 * It leverages the `class-variance-authority` (CVA) and `TailwindCSS` classes to manage styling via props,
 * offering control over display, flex/grid properties, margin, padding, and more.
 *
 * @component
 * @example
 * // Basic usage of the Box component:
 * <Box display="flex" flexDirection="column" justifyContent="center" padding="M" bgColor="primary">
 *   <p>Your content here</p>
 * </Box>
 *
 * @param {object} props - The properties passed to the Box component.
 * @param {"block"|"inlineBlock"|"inline"|"flex"|"grid"|"inlineFlex"} [props.display="flex"] - Sets the display property of the Box. Default is 'flex'.
 * @param {"row"|"column"|"rowReverse"|"columnReverse"} [props.flexDirection] - Sets the direction for flex items within the Box. Works when `display="flex"`.
 * @param {"start"|"center"|"end"|"between"|"around"|"evenly"} [props.justifyContent] - Defines how to align items along the main axis in a flex container.
 * @param {"start"|"center"|"end"|"stretch"|"baseline"} [props.alignItems] - Sets how flex items are aligned along the cross-axis.
 * @param {"Zero"|"XXS"|"XS"|"S"|"M"|"L"|"XL"|"XXL"|"XXXL"|"XXXXL"} [props.margin="Zero"] - Sets the margin spacing for the Box. Values correspond to TailwindCSS margin classes (e.g., "m-0", "m-4").
 * @param {"Zero"|"XXS"|"XS"|"S"|"M"|"L"|"XL"|"XXL"|"XXXL"|"XXXXL"} [props.padding="Zero"] - Sets the padding spacing for the Box. Values correspond to TailwindCSS padding classes (e.g., "p-0", "p-4").
 * @param {"auto"|"full"|"screen"|"half"|"quarter"} [props.width="auto"] - Defines the width of the Box. Width can be auto, full width, screen width, half, or quarter.
 * @param {"auto"|"full"|"screen"} [props.height="auto"] - Defines the height of the Box. Options include auto height, full height, or screen height.
 * @param {"Zero"|"XXS"|"XS"|"S"|"M"|"L"|"XL"|"XXL"|"XXXL"|"XXXXL"} [props.gap="Zero"] - Sets the gap between flex/grid items.
 * @param {"transparent"|"primary"|"secondary"|"accent"|"danger"} [props.bgColor="transparent"] - Sets the background color of the Box. Corresponds to TailwindCSS background classes (e.g., "bg-primary", "bg-danger").
 * @param {"primary"} [props.color="primary"] - Sets the text color within the Box. Corresponds to TailwindCSS text color classes.
 * @param {string} [props.className] - Additional custom class names to apply to the Box component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the Box.
 *
 * @returns {JSX.Element} A `div` element styled based on the passed system props and additional styles.
 */


export const Box = ({
    display,
    flexDirection,
    justifyContent,
    alignItems,
    margin,
    padding,
    width,
    height,
    gap,
    bgColor,
    color,
    border,
    borderRadius,
    borderColor,
    className,
    ...props
}) => {
    const boxClass = cn(
        boxVariants({
            display,
            flexDirection,
            justifyContent,
            alignItems,
            margin,
            padding,
            width,
            height,
            gap,
            bgColor,
            color,
            border,
            borderRadius,
            borderColor,
            className,
        })
    );

    return <div className={boxClass} {...props} />;
};

