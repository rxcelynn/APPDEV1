const food = ["cake", "ice cream", "ponkan"];
const newFood = [...food, "pizza", "burger"];
console.log(newFood); // [ 'cake', 'ice cream', 'ponkan', 'pizza', 'burger' ]
 
const user = { name: "Rosie", food: "Chicken Inasal" };
const newUser = { ...user, email: "rocelynlava1201@gmail.com" };
console.log(newUser); // { name: 'Rosie', food: 'Chicken Inasal', email: 'rocelynlava1201@gmail.com' }
 
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(12, 24, 36, 48)); // 120
