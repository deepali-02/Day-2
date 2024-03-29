const patients = require("./patients");

//console.log(patients);

/*const templates = patients.map(function(patient) {
  const { lastName, gender } = patient;
  const prefix = gender === "m" ? "Mr" : "Mrs";

  return `
    <html>
        <head>
            <title>Thanks for your participation</title>
        </head>
        <body>
            <h1>You are awesome</h1>

            <p>

                Dear ${prefix} ${lastName},

                Thank you for participating in this study ...

            </p>
        </body>
    </html>
  `;
});

console.log(templates[0]);
console.log(templates[1]);*/


const templates = patients.map(patient => {
    const prefix = patient.gender === "m" ? "Mr" : "Mrs"
    return `
    <html>
    <head>
        <title>Thanks for your participation</title>
    </head>
    <body>
        <h1>You are awesome</h1>

        <p>

            Dear ${prefix} ${patient.lastName},

            Thank you for participating in this study ...

        </p>
    </body>
</html>`
    
});

console.log(templates[0]);
console.log(templates[1]);