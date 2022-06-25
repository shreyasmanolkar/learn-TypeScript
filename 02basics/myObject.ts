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

type User2 = {
    readonly _id: string; 
    name: string;
    email: string;
    isActive: boolean;
    credCardDetail?: number
}

let myUser: User2 = {
    _id: "1245",
    name: "s", 
    email: 's@s.com',
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

myUser.email = "s@s.com"
// myUser._id = "asa"


export {};