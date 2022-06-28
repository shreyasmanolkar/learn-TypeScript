function addTwo(num: number): number{
    // return 'hello';
    return num + 2
}

addTwo(5);

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper("shreyas");

function signUpUser(name: string, email: string, isPaid: boolean){}

signUpUser("shreyas", "shreyasmanolkar123@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser('s', 's@s');

// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }

//     return "200 Ok"
// }

const getHello = (s: string):string => {
    return "";
}

const heros = ["indra", "varun", "agni", "surya", "chandra", "vayu"];

heros.map((hero): string => {
    return `hero is ${hero} `;
    // return 2;
});

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// error handeling

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


export {}