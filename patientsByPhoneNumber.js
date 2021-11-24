const patients = require("./patients");

const phoneNumber = (process.argv[2]);
const specificPatient = patients.find(function(patient){
    return phoneNumber === patient.phoneNumber;
});

specificPatient !== undefined ? console.log("OUTPUT:", specificPatient) : console.log(`Patient with phone number: ${phoneNumber}, not found`);

/*const patients = require("./patients");
const phoneNumber = process.argv[2];


const specificPatient = patients.find(function(patient) {

  return patient.phoneNumber === phoneNumber;
});

if (specificPatient !== undefined) {
  console.log(specificPatient);
} else {
  console.log(`Patient with phone number: ${phoneNumber}, not found`);
}*/