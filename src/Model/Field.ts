import { FieldType } from "./FieldType";
import { HasId } from "./HasId";


export class Field implements HasId {
    id: number;
    required: boolean;
    type: FieldType;
    title: string;
    hintText: string | null;
    validationRules: string | "ANY";
    // TODO: make validation rules a class with some predefined possibilities
    // TODO: validation should probably be part of type because allowed validations depend on FieldType

    constructor(
        id: number,
        required: boolean,
        type: FieldType,
        title: string,
        hintText: string | null = null,
        validationRules = "ANY",
    ) {
        this.id = id;
        this.required = required;
        this.type = type;
        this.title = title;
        this.hintText = hintText;
        this.validationRules = validationRules;
    }
}
