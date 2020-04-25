import { Page } from 'Model';


export class State {
    nextId: number = 1;
    pageContent: Page;

    constructor() {
        this.pageContent = new Page();
    }
}
