// Tuples 
// tuple is to make sure not just what is inside the array but also the order of array matters 
// []

// const user: string[] = ["sm"]; 

let tUser: [string, number, boolean] 

tUser = ["sm", 131, true];

let rgb: [number, number, number] = [255, 122, 0.5];

type User =  [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "sm.com";

export {};