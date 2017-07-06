export class Player {
    id: number;
    name: string = '';
    position: number = 0;
    waitSanction: number = 0;
    nextPlayer: number = 0;
    active: boolean = true;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
