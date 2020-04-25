import React from 'react';

import { Page as PageModel } from 'Model';


interface PageProps {
    page: PageModel;
}

export const Page: React.FC<PageProps> = (props) => {
    const page = props.page;
    
    return (
        <div>
            {JSON.stringify(page)}
        </div>
    );
};
