const massmark = 78;
const massjohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;
const BMIMark = massmark / heightMark ** 2;
const BMIJohn = massjohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, markHigherBMI);