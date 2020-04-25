import React from 'react';
import Page from 'Model/Page';

interface PageProps {
    page: Page;
}

const PageWidget: React.FC<PageProps> = (props) => {
    const page = props.page;
    
    return (
        <div>
            {JSON.stringify(page)}
        </div>
    );
};

export default PageWidget;
