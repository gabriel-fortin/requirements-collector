import React, { useState } from 'react';
import { Box, Collapse, Divider, Flex, Input, Text } from '@chakra-ui/core';

import { Field } from 'Model';


interface FEProps {
    field: Field;
}
// TODO: handle saving data: add on change callback
export const FieldEditor: React.FC<FEProps> = ({ field: fieldProp }) => {
    const [isCollpsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!isCollpsed);
    const [field, setField] = useState(fieldProp);

    return (
        <Box
            borderRadius={4}
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            paddingBottom={2}
            backgroundColor="rgba(155, 155, 155, 0.05)"
            border="solid 1px rgba(155, 155, 155, 0.15)"
        >
            <Flex onClick={toggle}>
                <Text as="span">
                    {field?.title}
                    &nbsp;
                </Text>
                <Collapse isOpen={!isCollpsed}
                    marginLeft={4}
                >
                    <Text
                        as="span"
                        fontSize={2}
                        color="rgba(150, 150, 150, 0.3)"
                    >
                        other props
                    </Text>
                </Collapse>
            </Flex>
            <Collapse isOpen={isCollpsed}>
                <Divider
                    marginTop={1}
                    marginBottom={2}
                    color="rgba(155, 155, 155, 0.4)"
                />
                <TextDataEditor title="field title" value={field.title}
                    onChange={(newValue: string) => {
                        setField({...field, title: newValue});
                    }}
                />
                <TextDataEditor title="field type" value={JSON.stringify(field.type)}
                    onChange={(newValue: string) => {
                        setField({...field, type: JSON.parse(newValue)});
                    }}
                />
                <TextDataEditor title="hint text" value={field.hintText ?? ""}
                    onChange={(newValue: string) => {
                        setField({...field, hintText: newValue});
                    }}
                />
                {/* TODO: handle 'required' */}
                {/* TODO: handle 'type' correctly */}
                {/* TODO: handle 'validationRules' */}
            </Collapse>
        </Box>
    );
};


interface TDEProps {
    title: string;
    value: string;
    onChange: (newValue: string) => void;
}
const TextDataEditor: React.FC<TDEProps> = ({ title, value, onChange })  => {
    const titleVerticalShift = 15;
    const borderRadius = 4;
    return (
        <Box
            position="relative"
            paddingTop={titleVerticalShift}
            marginY={3}
        >
            <Input
                size="sm"
                padding="1.0em"
                width="90%"
                borderRadius={borderRadius}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            />
            <Text
                as="div"
                position="absolute"
                top={0}
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
