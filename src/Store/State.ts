import Page from "../Model/Page";

class State {
    nextId: number = 1;
    pageContent: Page;

    constructor() {
        this.pageContent = new Page();
    }
}

export default State;
