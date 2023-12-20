"use strict";
// Destructuring
// array destructing
const userDetails = {
    id: 345,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "parsian"
    },
    contact: "017345678",
    address: "BNG"
};
const { id, name: { middleName }, contact: phone } = userDetails;
// array destructuring
const myFriends = ["noor", "mfuz", "rajib", "aziz", "anower", "nahid"];
const [, , , bestFriend, ...rest] = myFriends;
