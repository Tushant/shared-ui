import React from 'react';
import { fn } from "@storybook/test";

import { Button } from "./Button";
import { Box } from '../box'

export default {
    title: "UI/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
};

export const All = {
    render() {
        return (
            <>
                <p>Solid Buttons</p>
                <Box flexDirection="column" gap="L">
                    <Box flexDirection="row" gap="L"><SolidButtons.render /></Box>
                    <Box flexDirection="row" gap="L"><OutlineButtons.render /></Box>
                    <Box flexDirection="row" gap="L"><LinkButtons.render /></Box>
                    <Box flexDirection="row" gap="L"><RaisedButtons.render /></Box>
                </Box>
            </>
        );
    },
};


export const SolidButtons = {
    render() {
        return (
            <>
                <Button variant="solid" colorVariant="accent">
                    Accent Solid Button
                </Button>
                <Button variant="solid" colorVariant="danger">
                    Danger Solid Button
                </Button>
                <Button variant="solid" colorVariant="neutral">
                    Neutral Solid Button
                </Button>
                <Button variant="solid" isDisabled>
                    Disabled Solid Button
                </Button>
                <Button variant="solid" isLoading>
                    Loading Solid Button
                </Button>
                <Button variant="solid" isBlock>
                    Block Solid Button
                </Button>
                <Button variant="solid" size="sm">
                    Small Solid Button
                </Button>
                <Button variant="solid" size="lg">
                    Large Solid Button
                </Button>
                <Button variant="solid" shape="pill">
                    Pill Solid Button
                </Button>
            </>
        )
    }
}

// Outline Buttons
export const OutlineButtons = {
    render() {
        return (
            <>
                <Button variant="outline" colorVariant="accent">
                    Accent Outline Button
                </Button>
                <Button variant="outline" colorVariant="danger">
                    Danger Outline Button
                </Button>
                <Button variant="outline" colorVariant="neutral">
                    Neutral Outline Button
                </Button>
                <Button variant="outline" isDisabled>
                    Disabled Outline Button
                </Button>
                <Button variant="outline" isBlock>
                    Block Outline Button
                </Button>
                <Button variant="outline" size="sm">
                    Small Outline Button
                </Button>
                <Button variant="outline" size="lg">
                    Large Outline Button
                </Button>
                <Button variant="outline" shape="pill">
                    Pill Outline Button
                </Button>
            </>
        )
    }
}

// Link Buttons
export const LinkButtons = {
    render() {
        return (

            <>
                <Button variant="link" colorVariant="accent">
                    Accent Link Button
                </Button>
                <Button variant="link" colorVariant="danger">
                    Danger Link Button
                </Button>
                <Button variant="link" colorVariant="neutral">
                    Neutral Link Button
                </Button>
                <Button variant="link" isDisabled>
                    Disabled Link Button
                </Button>
                <Button variant="link" isBlock>
                    Block Link Button
                </Button>
                <Button variant="link" size="sm">
                    Small Link Button
                </Button>
                <Button variant="link" size="lg">
                    Large Link Button
                </Button>
                <Button variant="link" shape="pill">
                    Pill Link Button
                </Button>
            </>
        )
    }
}

// Raised Buttons
export const RaisedButtons = {
    render() {
        return (

            <>
                <Button variant="raised" colorVariant="accent">
                    Accent Raised Button
                </Button>
                <Button variant="raised" colorVariant="danger">
                    Danger Raised Button
                </Button>
                <Button variant="raised" colorVariant="neutral">
                    Neutral Raised Button
                </Button>
                <Button variant="raised" isDisabled>
                    Disabled Raised Button
                </Button>
                <Button variant="raised" isBlock>
                    Block Raised Button
                </Button>
                <Button variant="raised" size="sm">
                    Small Raised Button
                </Button>
                <Button variant="raised" size="lg">
                    Large Raised Button
                </Button>
                <Button variant="raised" shape="pill">
                    Pill Raised Button
                </Button>
            </>
        )
    }
}

// Disabled and Loading Buttons
export const DisabledLoadingButtons = {
    render() {
        return (

            <>
                <Button variant="solid" isDisabled colorVariant="accent">
                    Disabled Accent
                </Button>
                <Button variant="solid" isLoading colorVariant="danger">
                    Loading...
                </Button>
            </>
        )
    }
}
