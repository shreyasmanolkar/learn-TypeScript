var score = 33;
score = 44;
score = "55";
var shreyas = {
    name: "Shreyas",
    id: 334
};
shreyas = { username: "sm", id: 334 };
// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    ;
    if (typeof id === "number") {
        id + 2;
    }
}
;
// arrays
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3", 4];
// let pi: 3.14 = 3.14;
var seatAllotment;
