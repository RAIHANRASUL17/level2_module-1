{
//
// 1.Type Alias
type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo ? : string;
    address: string
}


const student1 : Student = {
    name: "Mezba",
    age: 30,
    gender: "male",
    contactNo: "0171234455",
    address: "dhaka"
};

const student2 : Student= {
    name: "Mir",
    age: 70,
    gender: "male",
    address: "ctg"
};

const student3 : Student = {
    name: "Abir",
    age: 40,
    gender: "male",
    contactNo: "0190000000",
    address: "ngk"
};


//2. Different Type of type alias
type UserName = string
type IsAdmin = boolean


const userName : UserName = "Raihan"
const isAdmin : IsAdmin = false

// 3.type alias used in function

// const add = (num1: number, num2 : number):number  => num1 + num2

type Add = (num1: number, num2 : number) => number 

const add : Add = (num1, num2) => num1 + num2
















// to remove block scope used "{}"
}