let score: number | string = 33;
score = 44;
score = "55";

type User3 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let shreyas: User3 | Admin = {
    name: "Shreyas",
    id: 334
}

shreyas = { username: "sm", id: 334 };

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// };

getDbId(3);
getDbId("3");

function getDbId(id: number | string){
    if( typeof id === "string"){
        id.toLowerCase()
    };

    if(typeof id === "number"){
        id + 2;
    }
};


// arrays

const data: number[] = [1,2,3];
const data2: string[] = ["1","2","3"];
const data3: ( string | number ) [] = ["1","2","3", 4];


// let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

