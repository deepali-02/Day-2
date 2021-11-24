const patients = require("./patients");
// Dynamic data using argv
// We have to convert the input to a number so we use parseInt
// run like this $ node patientsOlderThan.js 65
const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);
  return patient.age > age;
});


console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);