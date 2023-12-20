"use strict";
// Spread Operator
// array with spread operator
const bros1 = ["Mir", "Firoz", "Mizan"];
const bros2 = ["Tonmay", "Nahid", "Rahat"];
bros1.push(...bros2);
// object with spread operator
const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
};
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid"
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
