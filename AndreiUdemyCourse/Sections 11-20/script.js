//Exercise: Make a Calculator
// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter another number");
// let sum = parseInt(num1) + parseInt(num2);
// alert(sum);
//Make a keyless car
let userAge = parseInt(prompt("What is your age?"));
if (userAge > 18) {
	alert("Powering on, enjoy the ride!");
} else if (userAge === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
	alert("Sorry, you are too young to drive this car. Powering off");
}
