{
    // 
    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching")
        } else {
            console.log("There is nothing to search")
        }
    }

    // call function
    searchName(null)

    // unknown typeof
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The result is: ${convertedSpeed} m/s`)
        }

        else if (typeof value === "string") {
            // const valueInNumber = value.split(" ")
            // console.log(valueInNumber)
            const [valueInNumber, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
            console.log(`The result is: ${convertedSpeed} m/s`)
            // console.log(valueInNumber)
        }

        else {
            console.log("wrong in put")
        }
    };

    //call function
    // getSpeedInMeterPerSecond(`1000 km/h`)
    getSpeedInMeterPerSecond(null)

// Never Type
// const throwError = (msg: string) : never => {
//     throw new Error(msg)
// };

// // call function
// throwError("The ERor is displayed")





    // 
}