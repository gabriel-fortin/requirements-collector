import FieldGroup from "./FieldGroup";
import Field from "./Field";

class Page {
    content: (FieldGroup | Field)[];

    constructor(
        content: (FieldGroup | Field)[],
    ) {
        this.content = content;
    }
}

export default Page;