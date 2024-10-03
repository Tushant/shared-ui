import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card";

/**
 * Storybook Meta configuration for Card component.
 */
export default {
    title: "UI/Card",
    component: Card,
    subcomponents: { CardHeader, CardTitle, CardDescription, CardContent },
    parameters: {
        backgrounds: {
            default: 'dark'
        },
        layout: "centered",
    },
    argTypes: {
        className: { control: "text" },
    },
};


/**
 * Story for Card with minimal content.
 * Demonstrates how the card looks with just a header.
 */
export const MinimalCard = {
    render() {
        return (
            <Card>
                <CardHeader className="p-6">
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>This is a description of the card content.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>This is the main content of the card. You can put anything here.</p>
                </CardContent>
            </Card>
        )
    }
}
