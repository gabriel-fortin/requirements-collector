import { FieldType } from "./FieldType";
import { HasId } from "./HasId";


export class Field implements HasId {
    id: number;
    required: boolean;
    type: FieldType;
    title: string;
    label: string;
    hintText: string;
    validationRules: string | "ANY";
    // TODO: make validation rules a class with some predefined possibilities

    constructor(
        id: number,
        required: boolean,
        type: FieldType,
        title: string,
        label: string,
        hintText: string = "",
        validationRules = "ANY",
    ) {
        this.id = id;
        this.required = required;
        this.type = type;
        this.title = title;
        this.label = label;
        this.hintText = hintText;
        this.validationRules = validationRules;
    }
}
