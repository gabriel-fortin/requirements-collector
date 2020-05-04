import { Page, Field } from 'Model';
import { TreeNode } from 'Store';
import { stat } from 'fs';


type IdType = string;

export class State {
    
    /** Data entered by the user */
    userData: {
        
        /** All pages the user has */
        page: Map<IdType, TreeNode & Page>,
        
        /** All fields the user have */
        field: Map<IdType, TreeNode & Field>,
    };
    
    private nextId: number = 1;

    // TODO: remove when 'lastPageUsed' method not needed anymore
    private lastPageId: string | null = null;
    
    constructor() {
        this.userData = {
            page: new Map(),
            field: new Map(),
        };
    }
    
    private getNextId(): string {
        return String(this.nextId++);
    }

    // TODO: remove after initial dev phase when more robust access is implemented
    lastPageUsed(): Page {
        if (this.lastPageId === null) {
            throw new Error(`There is no last page`);
        }

        if (!this.userData.page.has(this.lastPageId as string)) {
            throw new Error(`Last page was not found`);
        }

        return this.userData.page.get(this.lastPageId as string) as Page;
    }

    // TODO: remove when test data not needed anymore
    static createWithSomeTestData(): State {
        type FT = import('Model').FieldType;

        const ft1: FT = { kind: "text", multiLine: true, maxCharacters: 55 };
        const ft2: FT = { kind: "number", minValue: 0, maxValue: null };
        const field1 = {
            id: "-14",
            parentId: null, 
            ...new Field(true, ft1, "home", "describe your home")
        };
        const field2 = {
            id: "-15",
            parentId: null,
            ...new Field(false, ft2, "age")
        };
        
        const state = new State();
        const pageId = state.getNextId();
        state.lastPageId = pageId;

        state.userData.page.set(pageId, {
            ...new Page([field1, field2]),
            id: pageId,
            parentId: null,
        });

        return state;
    }
}
