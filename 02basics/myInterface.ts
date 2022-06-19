interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
};

interface User {
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const shreyas: Admin = { dbId: 22, email: "shreyasmanolkar123@gmail.com", userId: 2211, githubToken: "github", role: "admin", startTrail: () => {
    return "trail Started"
}, 
getCoupon: (name: "shreyas10", off: 10) => {
    return 10
}
};

export {}; 