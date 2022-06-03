class User {

    email:string;
    name: string;
    readonly city: string = "pune";

    constructor(email: string, name: string){
        this.email = email;
        this.name = name; 
    }
}

const shreyas = new User("s@s.com", "shreyas");

// shreyas.city = "pune";