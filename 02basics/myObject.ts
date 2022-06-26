const User = {
    name: "Shreyas",
    email: "shreyasmanolkar123@gmail.com",
    isActive: true
};

function createUser({name: string, isPaid: boolean}){}

// createUser({name: "shreyas", isPaid: true});

// createUser({name: "shreyas", isPaid: true, email: "shreyasmanolkar123@gmail.com"});

let newUser = {name: "shreyas", isPaid: true, email: "shreyasmanolkar123@gmail.com"};

createUser(newUser);

function createCourse():{ name: string, price: number}{
    return {name: "reactjs", price: 399};
}


// type alias

type User = {
    name: string;
    email: string;
    isActive: boolean;
};

function createUserTwo(user: User): User {
    return {name: "", email: "", isActive: true}
};

createUserTwo({name: "shreyas", email: "shreyasmanolkar123@gmail.com", isActive: true});

export {};