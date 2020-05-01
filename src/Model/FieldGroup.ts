import { Field } from "./Field";


export class FieldGroup {
    title: string;
    fields: Field[];

    constructor(
        title: string,
        fields: Field[],
    ) {
        this.title = title;
        this.fields = fields;
    }
}
