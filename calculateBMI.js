const patients = require("./patients");

//console.log(patients);

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);

  const BMI = calculateBMI(patient.height, patient.weight); // calculate BMI for a patient here

  return BMI; // return BMI for a patient here
});

//console.log(bmis);

// Calculate BMR

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
    const heightInCm = height * 100;
  
    let BMR;
  
    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
  
    return BMR;
  }

  const bmrs = patients.map(patient =>{
      const BMR = calculateBMR(patient.weight, patient.height, patient.age, patient.gender)
      return BMR
  })

  console.log(bmrs)