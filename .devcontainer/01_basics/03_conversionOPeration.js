// Datatpe conversion and confusion.
let score = 33;
console.log(typeof score); //number
let valueInNumber = Number(score);
console.log(valueInNumber);

let score1 = "34";
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber); //number
console.log(valueInNumber1);

let score2 = "34abc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber); // number //but this is wrong
console.log(valueInNumber2); //output --> NaN -->  means --> Not a Number

let score3 = null;
console.log(score3);
console.log(typeof score3); //object

let score4 = undefined;
console.log(typeof score4); //undefined

let score5 = true;
console.log(typeof score5); //boolean
let valueInNumbe5 = Number(score5);
console.log(valueInNumbe5); // 1 because of true

let score6 = "hitesh";
let valueInNumber6 = Number(score6);
console.log(valueInNumber6);
