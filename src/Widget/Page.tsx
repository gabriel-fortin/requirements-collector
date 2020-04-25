import React from 'react';

import { Page as PageModel, Field as FieldModel } from 'Model';

import { FieldDisplay } from './FieldDisplay';


interface PageProps {
    page: PageModel;
}

export const Page: React.FC<PageProps> = ({ page }) => 
    <div style={{textAlign: "left"}}>
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
    </div>
