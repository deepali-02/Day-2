
const patients = require("./patients");

const height = parseFloat(process.argv[2]);

const tallerThanInputHeight = patients.filter(function(patient){
    return patient.height > height;
});

console.log("OUTPUT: ", tallerThanInputHeight);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`Total Nuber of patient taller than ${height} is`, tallerThanInputHeight.length);