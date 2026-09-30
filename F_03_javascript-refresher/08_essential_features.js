const hobbies = ["reading", "gaming", "eating"];
hobbies.map(hobby => console.log(hobby));
 
const student = { name: "Rocelyn", age: 22 };
const { name, age } = student;
console.log(name, age);
 
const numbers = [6, 7, 8];
const newNumbers = [...numbers, 9, 10]; // [6, 7, 8, 4, 5]
console.log(newNumbers);
