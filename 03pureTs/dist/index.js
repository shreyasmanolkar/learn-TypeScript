"use strict";
// class User {
//     public email:string;
//     private name: string;
//     readonly city: string = "pune";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name; 
//     }
// }
// const shreyas = new User("s@s.com", "shreyas");
// shreyas.city = "pune";
// shreyas.city;
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const shreyas = new User2("s@s.com", "shreyas");
