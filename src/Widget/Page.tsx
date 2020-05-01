import React from 'react';
import { Box, Text } from '@chakra-ui/core';

import { Page as PageModel, Field as FieldModel, Field, FieldType as FieldTypeModel } from 'Model';

import { FieldDisplay } from './FieldDisplay';
import { FieldEditor } from './FieldEditor';
import './page.css';


interface PageProps {
    page: PageModel;
}

export const Page: React.FC<PageProps> = ({ page }) =>
    <article className={"page"}>
        HELLO Page
        <br />
        <Text as="div" fontSize={1} color="grey">
            {JSON.stringify(page)}
        </Text>
        <table>
            <tbody>
                <tr>
                    <LocalHeader text="title" />
                    <LocalHeader text="hint text" />
                    <LocalHeader text="req / opt" />
                    <LocalHeader text="validation" />
                </tr>
                {page.content.map(fieldOrGroup =>
                    <FieldDisplay
                        key={fieldOrGroup.id}
                        field={fieldOrGroup as FieldModel}
                    />
                )}
            </tbody>
        </table>
        <FieldEditor field={new Field(true, { kind: "text", multiLine: false, maxCharacters: 55 } as FieldTypeModel, "Favourite Toy")} />
    </article>;

interface HProps { text: string; }
const LocalHeader: React.FC<HProps> = ({ text }) => 
    <th>
        <Box textAlign="center" px={2} mb={2}>
            <Text as="span" className="header-text" size="xs" px={1}>
                {text}
            </Text>
        </Box>
    </th>;
