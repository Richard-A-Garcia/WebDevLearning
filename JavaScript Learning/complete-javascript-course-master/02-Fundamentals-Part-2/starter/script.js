"use strict";
// //StrictMode
// let hasDriversLicence = false;
// let passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicence) {
//     console.log('I can drive');
// }

// Functions:
// function logger() {
//     console.log('My name is Richard');
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

//Declarations vs Expressions
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1999);
// //This is a function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1999);

//Arrow Functions:
//Old function expression:
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//arrow version
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3);
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1999));

//Coding Challenge 1:
// let avgDolphins;
// let avgKoalas;
// const calcAvg = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }
// const checkWinner = (avgKoalas, avgDolphins) => {
//     if (avgKoalas > avgDolphins) {
//         return "Koalas";
//     }
//     else {
//         return "Dolphins";
//     }
// }
// avgKoalas = calcAvg(65, 54, 49);
// avgDolphins = calcAvg(44, 23, 71);
// checkWinner(avgKoalas, avgDolphins);
// console.log(`${checkWinner(avgKoalas, avgDolphins)} win, ${avgKoalas} v. ${avgDolphins}`);

// //Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends.length);

// //Array Methods
// const friends = ['Michael', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);
// friends.push('Jay');
// friends.unshift('Rich');
// friends.pop();
// friends.shift();
// friends.indexOf('Steven');
// friends.includes('Steven');

// //Coding challenge 2
// const bills = [125, 555, 44];
// const calcTip = bill => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * .15;
//     }
//     else {
//         return bill * .20;
//     }
// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// //Objects
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas.lastName);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// //Object methods
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return;
//     }
// };
// // console.log(jonas.calcAge(1991));

// //Coding Challenge 3
// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const John = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// console.log(mark.bmi);

// //Loops
// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weights repetition ${rep}`);
// // }
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i]);
//     types[i] = typeof jonasArray[i];
// }
// console.log(types);
// console.log("test");
/**let markMass = 95;
let markHeight = 1.88;
let johnMass =85;
let johnHeight = 1.76;

let markbmi= markMass / (markHeight**2);
let johnbmi= johnMass / (johnHeight**2);
let markHigherBMI = markbmi > johnbmi;

console.log("Does Mark have a higher bmi than John? " + markHigherBMI);
**/
  