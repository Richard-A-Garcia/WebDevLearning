/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Richard";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// const firstName = "Richard ";
// const lastName = "Garcia";
// console.log(firstName + lastName);


//Coding Challenge 1:

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const JohnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > JohnBMI;
// console.log(markHigherBMI);

//Strings and Template literals:
// const firstName = 'Richard';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const richard = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old' + job + '!';
// console.log(richard);

// const richardNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(richardNew);
// console.log(`String
// multiple
// lines`);

//Making Decisions: If Else Statements:

// const age = 19;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Sara can start driving 😀');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years `);
// }
// let century;
// const birthYear = 1991;
// if (birthyear <= 2000) {
//     let century = 20;
// } else {
//     let centruy = 21;
// }

// const favorite = prompt("What's your favorite number");

//Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && !hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive")
// }
// else {
//     console.log("Someone else should drive");
// }

//Coding Challenge # 3:
// const dolphinsAvgScore = (100 + 110 + 110) / 3;
// const koalasAvgScore = (100 + 110 + 110) / 3;

// if (dolphinsAvgScore > koalasAvgScore) {
//     console.log("The dolphins are the winners")
// }
// else if (dolphinsAvgScore < koalasAvgScore) {
//     console.log("The Koalas are the winners")
// }
// else {
//     console.log("There was a draw");
// }

//Switch statement 
// const day = 'wednesday';
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// //The ternary or conditional operator
// const age = 15;
// age >= 18 ? console.log('I like to drink wine ') :
//     console.log("I like to drink water");
// //Another use
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
// //Coding challenge #4
// let tip;
// const bill = 275;
// tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);
