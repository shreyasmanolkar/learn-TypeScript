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
    
    protected _courseCount = 1;

    readonly city: string = "pune";

    constructor(
        public name: string,
        public email: string
    ){
    }

    private deleteToken(){
        console.log("Token Deleted");
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`        
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNumber: number){
        if(courseNumber <= 1){
            throw new Error("Course count should be more than 1"); 
        }
        this._courseCount = courseNumber;
    }

}


class subUser extends User3 {
    isFamily: boolean = true;

    changeCourseCount(){
        this._courseCount = 4;
    }

}