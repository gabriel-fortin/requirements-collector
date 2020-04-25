import { FieldGroup } from "./FieldGroup";
import { Field } from "./Field";


export class Page {
    content: (FieldGroup | Field)[];

    constructor(
        content: (FieldGroup | Field)[] = [],
    ) {
        this.content = content;
    }
}
