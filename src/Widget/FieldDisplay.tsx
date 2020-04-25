import React from 'react';

import { Field } from 'Model';

import './fieldDisplay.css';


interface FieldProps {
    field: Field;
}

export const FieldDisplay: React.FC<FieldProps> = ({field}) =>
    <tr className={"field-display"}>
        <td>{field.title}</td>
        <td>{field.label}</td>
        <td>{field.hintText ?? "—"}</td>
        <td>{field.validationRules}</td>
    </tr>
