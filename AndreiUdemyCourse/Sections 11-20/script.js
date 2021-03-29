function sayHello(){
	console.log("Hello");
}
var sayBye = function() { //Anonymous function 
	console.log("Bye");
}
sayBye();

var list = ["tiger", "cat", "bear", "bird"]; //js array 

var user = { //JS object
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
};

let todos =[
	"clean room!",
	"Brush teeth",
	"exercise",
	"study JS"
];
for(var i = 0; i< todos.length; i++){
	console.log(todos.pop());
}
