// arrayPractice.js

// importing our array of patients using `require`
const patients = require("./patients");

//console.log(patients);

// accesing elements in an array
const firstPatient = patients[0];

console.log(`First patient information: `,firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(`10th patient information: `,tenthPatient);

// DIY

// - console.log the second patient from the array
const secondPatient = patients[1];
console.log(`Second patient information: `,secondPatient);

// - console.log the last patient from the array
const lastPatient = patients[patients.length - 1];
console.log(`Last patient information: `, lastPatient);

const idOfFirstPatient = patients[0].id;
console.log("First Patient Id: ", idOfFirstPatient);
