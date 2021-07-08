// let name = "Max";
// let age = 29;
// let hasHobbies = true;
// const summarizeUser = (userName, userAge, userHasHobby) =>  {
//     return "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby;
// }
// console.log(summarizeUser(name, age, hasHobbies));

const person ={
    name: "Richard",
    age: 21,
    greet() {
        console.log("Hi, I am " + this.name);
    }
}
person.greet();
const hobbies = ["Sports", "Cooking"];
for(let hobby of hobbies){
    console.log(hobby);
}
hobbies.map(); 