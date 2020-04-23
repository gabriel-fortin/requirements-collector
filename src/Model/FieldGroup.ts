import Field from "./Field";

class FieldGroup {
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

export default FieldGroup;
