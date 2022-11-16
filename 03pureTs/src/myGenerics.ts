const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val
};

function identityTwo(val: any): any{
    return val;
};

function identityThree<Type>(val: Type): Type{
    return val;
};

// shortcut to define generics

function identityFour<T>(val: T): T{
    return val;
};

interface Bottle{
    brand: string,
    type: number
};

function identityFive<Bottle>(val: Bottle): Bottle{
    return val;
};

function getSearchProducts<T>(products: T[]): T{
    // do some database opearations

    const myIndex = 3;

    return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return  products[myIndex];
};