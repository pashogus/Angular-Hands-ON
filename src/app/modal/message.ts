export class Message {
    id: number;
    message : string;

    constructor(private _id :number, public messageString:string )
    {
        this.id=_id;
        this.message=messageString;
    }
}

