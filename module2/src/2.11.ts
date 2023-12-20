{
    //
    //1: ternary operator
    const age: number = 18;

    if (age >= 18) {
        console.log("adult")
    } else {
        console.log("not adult")
    }

    const isAdult = age >= 18 ? "ADULT" : "NOT Adult";
    console.log("----", isAdult)


    //2: Nullish Coalescing
    // null/undefine ---> decision making 
    // const isAuthentication = null;
    // const isAuthentication = undefined;
    const isAuthentication = "";


    const result1 = isAuthentication ?? "GEST"; // nullish

    const result2 = isAuthentication ? isAuthentication : "gestIS"; // ternary
    console.log({ result1 }, { result2 })

    //3: Optional Operator

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    };

    const user: User = {
        name: "raihan",
        address: {
            city: "khl",
            road: "123",
            presentAddress: "khl"
        }
    };

    const findPermanentAddress = user?.address?.permanentAddress ?? "No Permanent Address is Found"
    console.log({ findPermanentAddress })


    // 
}