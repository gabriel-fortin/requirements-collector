import React from 'react';

import { Field } from 'Model';

interface FieldProps {
    field: Field;
}

export const FieldDisplay: React.FC<FieldProps> = ({field}) =>
    <>
        <div>HELLO Field</div>
        <div>
            {JSON.stringify(field)}
        </div>
    </>
