export class Player {
    public id: number;
    public name: string;
    public position: number;
    public waitSanction: number;
    public nextPlayer: number;

    constructor( name: string) {
        this.name = name;
        this.position = 0;
        this.waitSanction = 0;
    }


    sanction() {
        this.waitSanction = 3;
    }

    substractSanction(waitSanction: number) {
        if (this.waitSanction > 0) {
            this.waitSanction--;
        }
    }
}
