import React from 'react';
import { fn } from "@storybook/test";

import { HorizontalStack, VerticalStack } from "./Stack";
import { Button } from '../button';

export default {
    title: "UI/Stack",
    component: HorizontalStack,
    subcomponents: VerticalStack,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
}

export const HorizontalStackLayout = {
    render() {
        return (
            <>
                <HorizontalStack gap="Zero">
                    <Button variant="solid">Button</Button>
                    <Button variant="solid" colorVariant="danger">Button</Button>
                    <Button variant="solid" colorVariant="neutral">Button</Button>
                </HorizontalStack>
                <p className="mt-4">Horizontal Stack with gap XL </p>
                <HorizontalStack gap="XL">
                    <Button variant="solid">Button</Button>
                    <Button variant="solid" colorVariant="danger">Button</Button>
                    <Button variant="solid" colorVariant="neutral">Button</Button>
                </HorizontalStack>
            </>
        )
    }
}


export const VerticalStackLayout = {
    render() {
        return (
            <>
                <VerticalStack gap="XL">
                    <Button variant="solid">Button</Button>
                    <Button variant="solid" colorVariant="danger">Button</Button>
                    <Button variant="solid" colorVariant="neutral">Button</Button>
                </VerticalStack>
            </>
        )
    }
}
