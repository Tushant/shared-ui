import React from 'react';
import { Button } from '../button';
import { Box } from './Box';


export default {
    title: "UI/Box",
    component: Box,
    parameters: {
        backgrounds: {
            default: 'dark'
        },
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
}


export const BoxDefault = {
    render() {
        return (
            <>
                <Box gap="Zero">
                    <Button variant="solid">Button</Button>
                    <Button variant="solid" colorVariant="danger">Button</Button>
                    <Button variant="solid" colorVariant="neutral">Button</Button>
                </Box>
            </>
        )
    }
}

export const BoxWithBorder = {
    render() {
        return (
            <>

                <Box border="solid" borderRadius="lg" borderColor="accent" padding="M" gap="Zero">
                    <Button variant="solid">Button</Button>
                    <Button variant="solid" colorVariant="danger">Button</Button>
                    <Button variant="solid" colorVariant="neutral">Button</Button>
                </Box>
            </>
        )
    }
}
