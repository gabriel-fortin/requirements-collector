import React, { useContext } from 'react';
import { Text } from '@chakra-ui/core';

import { StateContext } from 'Store';
import {
    Page as PageModel,
    Field as FieldModel,
} from 'Model';

import { FieldEditor } from './FieldEditor';
import './page.css';


interface PurePageProps {
    page: PageModel;
}
export const PurePage: React.FC<PurePageProps> = ({ page }) =>
    <article className={"page"}>
        <Text as="h1" textAlign="center" marginTop={0}>
            Circus Service
        </Text>
        {page.content
            .map(x => x as FieldModel)
            .map(field => <FieldEditor field={field} />)
        }
    </article>;


interface ConnectedPageProps {
    pageId: string;
}
export const ConnectedPage: React.FC<ConnectedPageProps> = ({ pageId }) => {
    const stateContext = useContext(StateContext);

    return <PurePage page={stateContext.getPage(pageId)} />
};


export const DefaultTestPage: React.FC<{}> = () => {
    const stateContext = useContext(StateContext);
    return <PurePage page={stateContext.lastPageUsed()} />;
};
