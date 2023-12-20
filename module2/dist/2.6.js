"use strict";
// Learning Function
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// normal function default value in num2
function add2(num1, num2 = 10) {
    return num1 + num2;
}
add2(2, 3);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// Method Type 
// object --> function --> method
// method with number
const poorUser = {
    name: "raihan",
    balance: 0,
    addBalance(isBalance) {
        return this.balance + isBalance;
    }
};
// method with string
const richUser = {
    name: "Mezba",
    balance: 100,
    addBalance(isBalance) {
        return `my current balance: ${this.balance + isBalance}`;
    }
};
// Map Function with array
const arr = [1, 2, 4];
const newArray = arr.map((item) => item * item);
