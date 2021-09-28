export class Approver {

    username:string;
    email:string;
    fullName:string;

    constructor(private _username:string , private _email:string , private _fullName:string)
    {
              this.username= _username;
              this.email=_email;
              this.fullName= _fullName;
              
    }
}

