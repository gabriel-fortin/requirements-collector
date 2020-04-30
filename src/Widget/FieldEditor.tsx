import React from 'react';
import { Box, Input, Text } from '@chakra-ui/core';

import { Field } from 'Model';


interface FEProps {
    field: Field | null;
}
export const FieldEditor: React.FC<FEProps> = ({ field }) => {
    return (
        <TextField title="name"/>
    );
};


interface TFProps {
    title: string;
}
const TextField: React.FC<TFProps> = ({ title })  => {
    const titleVerticalShift = 15;
    const borderRadius = 4;
    return (
        <Box
            position="relative"
            marginTop={titleVerticalShift}
        >
            <Input
                size="sm"
                padding="1.0em"
                width="90%"
                borderRadius={borderRadius}
                value="dwdwdwdwd dwijdiw diwjd sdovosj"
            />
            <Text as="div"
                position="absolute"
                top={-titleVerticalShift}
                left={0}
                zIndex={14}
                padding="0 0.5em"
                marginLeft="1.7em"
                fontSize={1}
                fontWeight="bold"
                textTransform="uppercase"
                color="black"
                backgroundColor="white"
                borderRadius={borderRadius}
            >
                {title}
            </Text>
        </Box>
    );
};
