const age = 15;
//const isOldEnough = age >= 18;
if (age >= 18) {
  console.log("Shiny can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Shiny is too young. Wait another ${yearsLeft} years :)`);
}

{
  //made it block scoped
  const massMark = 78;
  const heightMark = 1.69;
  const massJohn = 92;
  const heightJohn = 1.95;

  const BMIMark = massMark / heightMark ** 2;
  const BMIJohn = massJohn / heightJohn ** 2;

  if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's!`);
  } else {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's!`);
  }
}
