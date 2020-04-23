import FieldType from "./FieldType";

class Field {
    required: boolean;
    type: FieldType;
    title: string;
    label: string;
    hintText: string;
    validationRules: string | "ANY";
    // TODO: make validation rules a class with some predefined possibilities

    constructor(
        required: boolean,
        type: FieldType,
        title: string,
        label: string,
        hintText: string = "",
        validationRules = "ANY",
    ) {
        this.required = required;
        this.type = type;
        this.title = title;
        this.label = label;
        this.hintText = hintText;
        this.validationRules = validationRules;
    }
}

export default Field;
