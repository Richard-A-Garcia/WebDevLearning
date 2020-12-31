/*This code is beginning from colt steele js section 19 and on. Up to this point I had just been deleting but I'll start
commenting out the code instead */
/**let max = parseInt(prompt("Enter the Maximum number"));

while (!max) {
  max = parseInt(prompt("Enter A valid number!"));
}
const targetNum = Math.floor(Math.random() * max) + 1;
let guess = parseInt(prompt("Enter your first guess!"));
let tries = 0;
while (guess != targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("Too High! Enter another guess!"));
  } else if (guess < targetNum) {
    guess = parseInt(prompt("Too Low! Enter another guess!"));
  }
  tries++;
}
console.log("You got it");*/
//functions
// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }
// singSong();
// singSong();
// singSong();
// singSong();

// function capitalize(string) {
//   let firstLetter = string.slice(0, 1).toUpperCase();
//   //console.log(firstLetter);
//   let rest = string.slice(1);
//   let newString = firstLetter.concat(rest);
//   //console.log(newString);
//   return newString;
// }
// capitalize("eggplant");
// //console.log(capitalize("eggplant"));

// Map Practice
// let names = [" Fred , John "];
// const cleanNames = function (array) {
//   return array.map(function (el) {
//     return el.trim();
//   });
// };

// console.log(cleanNames);
// // let names = [" Fred , John "];
// // function cleanNames(array) {
// //   array.map(function (el) {
// //     el.trim();
// //   });
// // }
// // console.log(cleanNames(names));

//setTimeout() and setInterval()
// setTimeout(() => {
//   console.log("HELLO!!!");
// }, 3000);
// setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//Filter
// const goodMovies = movies.filter(
//   movies.filter((movie) => {
//     return movie.score > 80;
//   })
// );
let arrNames = ["fred", "stacey12345678", "Rob1787878937", "Richthe"];
const validUserNames = arrNames.filter((userNames) => userNames.length < 10);

console.log(validUserNames);
