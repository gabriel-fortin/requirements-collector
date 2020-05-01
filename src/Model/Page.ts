import { FieldGroup } from "./FieldGroup";
import { Field } from "./Field";
import { HasId } from './HasId';


export class Page {
    content: (HasId & (FieldGroup | Field))[];

    constructor(
        content: (HasId & (FieldGroup | Field))[] = [],
    ) {
        this.content = content;
    }
}
