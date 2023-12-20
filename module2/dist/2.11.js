"use strict";
var _a, _b;
{
    //
    //1: ternary operator
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "ADULT" : "NOT Adult";
    console.log("----", isAdult);
    //2: Nullish Coalescing
    // null/undefine ---> decision making 
    // const isAuthentication = null;
    // const isAuthentication = undefined;
    const isAuthentication = "";
    const result1 = isAuthentication !== null && isAuthentication !== void 0 ? isAuthentication : "GEST"; // nullish
    const result2 = isAuthentication ? isAuthentication : "gestIS"; // ternary
    console.log({ result1 }, { result2 });
    const user = {
        name: "raihan",
        address: {
            city: "khl",
            road: "123",
            presentAddress: "khl"
        }
    };
    const findPermanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address is Found";
    console.log({ findPermanentAddress });
    // 
}
