{
// 
// Union Type --> or --> |
//exam-1 union type
type FrontendDeveloper = "Fakibaji Developer" | "Junior Developer";

const newDeveloper : FrontendDeveloper = "Fakibaji Developer"

//exam-2 union type
type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "AB+" | "A+"
}

const user1 : User = {
    name: "Mezbar",
    gender: "male",
    bloodGroup: "AB+"
}

//exam-3 union type
type FullstackDeveloper = "Frontend Developer" | "Expert Developer";
type Developer = FrontendDeveloper | FullstackDeveloper;

const newDeveloper2 : Developer = "Expert Developer"


// Intersection Types
type FrontEndDeveloper = {
    skills: string[];
    designations1: "Frontend Developer"
}
type BackendDeveloper = {
    skills: string[];
    designations2: "Backend Developer"
}

type FullStackDeveloper = FrontEndDeveloper | BackendDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designations1: "Frontend Developer",
    designations2: "Backend Developer"

}

// 
}