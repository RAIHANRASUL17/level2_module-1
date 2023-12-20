// Spread Operator

// array with spread operator
const bros1 : string[] = ["Mir", "Firoz", "Mizan"]
const bros2 : string[] = ["Tonmay", "Nahid", "Rahat"]

bros1.push(...bros2)

// object with spread operator
const mentors1 = {
    typescript : "Mezba",
    redux : "Mir",
    dbms : "Mizan"
}

const mentors2 = {
    prisma : "Firoz",
    next : "Tanmoy",
    cloud : "Nahid"
}

const mentorList = {
    ...mentors1,
    ...mentors2
}
