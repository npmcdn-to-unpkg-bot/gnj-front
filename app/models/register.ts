export class Register {
    constructor(private email:string, private password:string, private confirmpassword:string,
                    private lastname:string, private firstname:string, private phonenumber:string,
                    private street:string, private city:string, private zipcode:string,
                    private legalinfo:boolean) {}
}