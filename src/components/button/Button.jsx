import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            colorVariant: {
                accent: "",
                danger: "",
                neutral: "",
            },
            variant: {
                solid: "",
                outline: "",
                link: "",
                raised: "",
            },
            size: {
                sm: "h-9 px-3 text-xs rounded-md",
                md: "h-10 py-2 px-4 text-sm rounded-md",
                lg: "h-11 px-8 text-md rounded-lg",
                iconSm: "h-9 w-9",
                iconMd: "h-10 w-10",
                iconLg: "h-11 w-11",
            },
        },
        compoundVariants: [
            {
                colorVariant: "accent",
                variant: "solid",
                className: "bg-accent text-content-inverse hover:bg-accentHover focus:ring-2 focus:ring-accentActive"
            },
            {
                colorVariant: "accent",
                variant: "outline",
                className: "border border-accent text-accent hover:bg-accentHover focus:ring-2 focus:ring-accentActive"
            },
            {
                colorVariant: "accent",
                variant: "link",
                className: "text-accent underline hover:text-accentHover focus:ring-2 focus:ring-accentActive"
            },
            {
                colorVariant: "accent",
                variant: "raised",
                className: "bg-accent text-content-inverse shadow-lg hover:bg-accentHover focus:ring-2 focus:ring-accentActive"
            },
            // Danger variants
            {
                colorVariant: "danger",
                variant: "solid",
                className: "bg-danger text-content-inverse hover:bg-red-tint4 focus:ring-2 focus:ring-danger"
            },
            {
                colorVariant: "danger",
                variant: "outline",
                className: "border border-danger text-danger hover:bg-red-tint4 focus:ring-2 focus:ring-danger"
            },
            {
                colorVariant: "danger",
                variant: "link",
                className: "text-danger underline hover:text-red-tint4 focus:ring-2 focus:ring-danger"
            },
            {
                colorVariant: "danger",
                variant: "raised",
                className: "bg-danger text-content-inverse shadow-lg hover:bg-red-tint4 focus:ring-2 focus:ring-danger"
            },

            // Neutral variants
            {
                colorVariant: "neutral",
                variant: "solid",
                className: "bg-active text-content-primary hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800"
            },
            {
                colorVariant: "neutral",
                variant: "outline",
                className: "border-neutral-gray800 text-neutral-gray800 shadow-[inset_0_0_0_1px_#cccc] hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800"
            },
            {
                colorVariant: "neutral",
                variant: "link",
                className: "text-neutral-gray800 underline hover:text-surface-hover focus:ring-2 focus:ring-neutral-gray800"
            },
            {
                colorVariant: "neutral",
                variant: "raised",
                className: "bg-surface-primary text-content-primary shadow-lg hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800"
            },
        ],
        defaultVariants: {
            colorVariant: "accent",
            variant: "solid",
            size: "md",
        },
    }
);

//const buttonVariants = cva(
//    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//    {
//        variants: {
//            colorVariant: {
//                accent: {
//                    solid: 'bg-accent text-content-inverse hover:bg-accentHover focus:ring-2 focus:ring-accentActive',
//                    outline: 'border-accent text-accent hover:bg-accentHover focus:ring-2 focus:ring-accentActive',
//                    link: 'text-accent underline hover:text-accentHover focus:ring-2 focus:ring-accentActive',
//                    raised: 'bg-accent text-content-inverse shadow-lg hover:bg-accentHover focus:ring-2 focus:ring-accentActive',
//                },
//                danger: {
//                    solid: 'bg-danger text-content-inverse hover:bg-red-tint4 focus:ring-2 focus:ring-danger',
//                    outline: 'border-danger text-danger hover:bg-red-tint4 focus:ring-2 focus:ring-danger',
//                    link: 'text-danger underline hover:text-red-tint4 focus:ring-2 focus:ring-danger',
//                    raised: 'bg-danger text-content-inverse shadow-lg hover:bg-red-tint4 focus:ring-2 focus:ring-danger',
//                },
//                neutral: {
//                    solid: 'bg-surface-primary text-content-primary hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800',
//                    outline: 'border-neutral-gray800 text-neutral-gray800 hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800',
//                    link: 'text-neutral-gray800 underline hover:text-surface-hover focus:ring-2 focus:ring-neutral-gray800',
//                    raised: 'bg-surface-primary text-content-primary shadow-lg hover:bg-surface-hover focus:ring-2 focus:ring-neutral-gray800',
//                },
//            },
//            variant: {
//                solid: '', // handled by colorVariant
//                outline: '', // handled by colorVariant
//                link: '', // handled by colorVariant
//                raised: '', // handled by colorVariant
//            },
//            size: {
//                sm: "h-9 px-3 text-xs rounded-md", // Small button
//                md: "h-10 py-2 px-4 text-sm rounded-md", // Medium button
//                lg: "h-11 px-8 text-md rounded-lg", // Large button
//                iconSm: "h-9 w-9", // Icon small
//                iconMd: "h-10 w-10", // Icon medium
//                iconLg: "h-11 w-11", // Icon large
//            },
//            shape: {
//                default: 'rounded-md', // Default shape
//                pill: 'rounded-full',  // Pill-shaped button
//            },
//            // Disabled state
//            disabled: {
//                true: 'opacity-50 cursor-not-allowed',
//            },
//        },
//        defaultVariants: {
//            colorVariant: 'accent',
//            variant: 'solid',
//            size: 'md',
//        },
//    }
//);

const spinnerStyles = {
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '16px',
        height: '16px',
        border: '2px solid currentColor',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 0.6s linear infinite',
    },
    '@keyframes spin': {
        to: {
            transform: 'translate(-50%, -50%) rotate(360deg)',
        },
    },
};

const LoadingSpinner = () => <div style={spinnerStyles.spinner} />;

export const Button = React.forwardRef(
    ({ children, icon, iconAlign = "start", isLoading, colorVariant = "accent", variant = 'solid', size = "md", className, ...props }, ref) => {
        const buttonClass = cn(buttonVariants({ colorVariant, variant, size, className }));
        console.log('buttonClass', buttonClass)
        return (
            <button ref={ref} {...props} className={buttonClass}>
                {iconAlign === "start" && icon}
                {children}
                {iconAlign === "end" && icon}
                {isLoading && <LoadingSpinner />}
            </button >
        )
    }
);

