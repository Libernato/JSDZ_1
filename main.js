var name = "Рустам";
var age = 21;
var isStudent = true;
var emptyVariable = null;
var undefinedVariable;

console.log(name);
console.log(age); 
console.log(isStudent); 
console.log(emptyVariable); 
console.log(undefinedVariable); 

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyVariable);
console.log(typeof undefinedVariable);

var person = {
    name: "Рустам",
    age: 21,
    isStudent: true
};

console.log("Меня зовут " + person.name + ", мне " + person.age + " лет, я студент: " + person.isStudent);

var games = ["Dota 2", "League of Legends", "Hollow Knight", "Peak", "Shape of dreams"];

console.log(games);