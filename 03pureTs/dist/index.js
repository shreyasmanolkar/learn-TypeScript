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
// class User2 {
//     constructor(
//         public email: string, 
//         public name: string,
//         // private userId: string
//     ){}
// }
// const shreyas = new User2("s@s.com", "shreyas");
//  getters and setters
class User3 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "pune";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
