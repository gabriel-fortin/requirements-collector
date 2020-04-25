import { Field } from "./Field";
import { HasId } from "./HasId";


export class FieldGroup implements HasId {
    id: number;
    title: string;
    fields: Field[];

    constructor(
        id: number,
        title: string,
        fields: Field[],
    ) {
        this.id = id;
        this.title = title;
        this.fields = fields;
    }
}
