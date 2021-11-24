const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign the firstName, and lastName of the firstPatient to it
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"

const {weight, age, height} = firstPatient;

console.log(`First patient weight ${weight}, First patient age ${age}, First patient height ${height}`);

/*const fullName = firstPatient.firstName + firstPatient.lastName;

console.log(`Full Name of Fist patient is: `, fullName);*/

const {firstName, lastName} = firstPatient;
console.log(`Full name of this person is: ${firstName} ${lastName}`);

firstPatient.dailyExercise === "yes" ? console.log("this patient exercises") : console.log("this paitent does not exercise");