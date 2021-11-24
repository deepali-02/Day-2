// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

//console.log(patients);

let specificPatient = patients.find(function(patient){
    return email === patient.email;
}); // your logic here

//console.log(specificPatient);

specificPatient !== undefined ? console.log("OUTPUT:", specificPatient) : console.log(`Patient with email: ${email}, not found`);
  