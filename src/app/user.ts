export class users{
    firstName:string;
    lastName:string;
    email:string;
    contactNumber:string;
    ageRange:string;
    state:string;
    country:string;
    address:string;
    tags:string;

    constructor(firstName: string, lastName: string, email: string, contactNumber: string,ageRange:string,state:string,country:string,address:string,tags:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.ageRange=ageRange;
        this.state=state;
        this.country=country;
        this.address=address;
        this.tags=tags;

}
}