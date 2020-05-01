import React from 'react';
import { Text } from '@chakra-ui/core';

import {
    Page as PageModel,
    Field as FieldModel,
    FieldType as FieldTypeModel
} from 'Model';

import { FieldEditor } from './FieldEditor';
import './page.css';


interface PageProps {
    page: PageModel;
}
export const Page: React.FC<PageProps> = ({ page }) =>
    <article className={"page"}>
        <Text as="h1" textAlign="center" marginTop={0}>
            Circus Service
        </Text>
        {page.content
            .map(x => x as FieldModel)
            .map(field => <FieldEditor field={field} />)
        }
    </article>;
