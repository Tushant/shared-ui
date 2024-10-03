import React from "react";
import { cn } from "../../utils"; // Assuming cn is a utility function for conditional class names

/**
 * Card component that acts as a container with rounded corners, border, and shadow.
 * Can accept custom classes and props for additional customization.
 *
 * @param {Object} props - Props passed to the Card component.
 * @param {string} [props.className] - Additional class names to customize the card's style.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the card container.
 * @returns {JSX.Element} The rendered card component.
 */
const Card = React.forwardRef(function Card({ className, ...props }, ref) {
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    );
});
Card.displayName = "Card";

/**
 * CardHeader component that provides structure for the card's header.
 * Typically contains the card title and description.
 *
 * @param {Object} props - Props passed to the CardHeader component.
 * @param {string} [props.className] - Additional class names to customize the header's style.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the card header container.
 * @returns {JSX.Element} The rendered card header component.
 */
const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
    return (
        <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
    );
});
CardHeader.displayName = "CardHeader";

/**
 * CardTitle component for displaying the card's main title.
 * Renders as an h3 element by default.
 *
 * @param {Object} props - Props passed to the CardTitle component.
 * @param {string} [props.className] - Additional class names to customize the title's style.
 * @param {React.Ref<HTMLHeadingElement>} ref - Forwarded ref to the card title element.
 * @returns {JSX.Element} The rendered card title component.
 */
const CardTitle = React.forwardRef(function CardTitle({ className, ...props }, ref) {
    return (
        <h3
            ref={ref}
            className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
            {...props}
        />
    );
});
CardTitle.displayName = "CardTitle";

/**
 * CardDescription component for displaying the card's description text.
 * Renders as a paragraph element by default.
 *
 * @param {Object} props - Props passed to the CardDescription component.
 * @param {string} [props.className] - Additional class names to customize the description's style.
 * @param {React.Ref<HTMLParagraphElement>} ref - Forwarded ref to the card description element.
 * @returns {JSX.Element} The rendered card description component.
 */
const CardDescription = React.forwardRef(function CardDescription({ className, ...props }, ref) {
    return (
        <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
    );
});
CardDescription.displayName = "CardDescription";

/**
 * CardContent component that wraps the main content of the card.
 * Provides padding and spacing, usually placed after the header.
 *
 * @param {Object} props - Props passed to the CardContent component.
 * @param {string} [props.className] - Additional class names to customize the content's style.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the card content container.
 * @returns {JSX.Element} The rendered card content component.
 */
const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});
CardContent.displayName = "CardContent";

/**
 * CardFooter component for placing footer content like buttons or other actions.
 * Typically placed at the bottom of the card.
 *
 * @param {Object} props - Props passed to the CardFooter component.
 * @param {string} [props.className] - Additional class names to customize the footer's style.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the card footer container.
 * @returns {JSX.Element} The rendered card footer component.
 */
const CardFooter = React.forwardRef(function CardFooter({ className, ...props }, ref) {
    return (
        <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
    );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
