import React from 'react';

import { Field as FieldModel } from 'Model';

interface FieldProps {
    field: FieldModel;
}

export const Field: React.FC<FieldProps> = ({field}) => {
    return (
        <>
        <div>HELLO Field</div>
        <div>
            {JSON.stringify(field)}
        </div>
        </>
    );
};
