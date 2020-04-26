import React from 'react';

import { Page as PageModel, Field as FieldModel } from 'Model';

import { FieldDisplay } from './FieldDisplay';
import './page.css';


interface PageProps {
    page: PageModel;
}

export const Page: React.FC<PageProps> = ({ page }) => 
    <article className={"page"}>
        HELLO Page
        {JSON.stringify(page)}
        <table style={{marginLeft: "4em", marginTop: "1em"}}>
            {page.content.map(fieldOrGroup =>
                <FieldDisplay
                    key={fieldOrGroup.id}
                    field={fieldOrGroup as FieldModel}
                />
            )}
        </table>
    </article>
