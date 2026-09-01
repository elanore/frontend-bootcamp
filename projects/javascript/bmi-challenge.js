const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const MarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, MarkHigherBMI);
