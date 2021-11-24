const patients =require("./patients")


// Mapping on full name
const fullName = patients.map(patient => `${patient.firstName} ${patient.lastName}`)
console.log("List of patients with full Names: ", fullName)

//mapping by phone numbers
const phoneByMapping = patients.map(patient => patient.phoneNumber)
console.log("List of patients with thier Id: ", phoneByMapping)

//mapping by patient ID
const idByMapping = patients.map(patient => patient.id)
console.log("List of patients with Id: ", idByMapping)