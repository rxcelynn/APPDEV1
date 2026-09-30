const person = { name: "Eia", age: 21 };
const { name, age } = person;
console.log(name, age); // "Eia 21"
 
const hobbies = ["reading", "gaming", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "reading gaming"
 
function printName({ name }) {
  console.log(name);
}

printName(person); // "Eia"
