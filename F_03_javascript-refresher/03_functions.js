function greet(name) {
  return "Hello from the other side, " + name;
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, r) {
  return { sum: a + r, product: a * r };
}

console.log(greet("Rosie"));
console.log(square(4));
console.log(calculator(3, 5));