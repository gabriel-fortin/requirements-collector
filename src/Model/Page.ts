import { FieldGroup } from "./FieldGroup";
import { Field } from "./Field";
import { TreeNode } from 'Store';


export class Page {
    content: (TreeNode & (FieldGroup | Field))[];

    constructor(
        content: (TreeNode & (FieldGroup | Field))[] = [],
    ) {
        this.content = content;
    }
}
