const patients =require("./patients")

const fullName = patients.map(patient => `${patient.firstName} ${patient.lastName}`)

console.log("List of patients with full Names: ", fullName)
