// Learning Function
// normal function
function add(num1 : number, num2 : number):number {
    return num1 + num2
}

add(2, 3)

// normal function default value in num2
function add2(num1 : number, num2 : number=10):number {
    return num1 + num2
}

add2(2, 3)

// arrow function
const addArrow = (num1 : number, num2 : number): number => num1 + num2

// Method Type 
// object --> function --> method
// method with number
const poorUser = {
    name : "raihan",
    balance : 0,
    addBalance(isBalance : number):number {
        return this.balance + isBalance
    }
};

// method with string
const richUser = {
    name : "Mezba",
    balance : 100,
    addBalance(isBalance : number):string {
        return `my current balance: ${this.balance + isBalance}`
    }
};

// Map Function with array
const arr : number[] = [1, 2, 4]

const newArray: number[] = arr.map((item : number):number => item*item)