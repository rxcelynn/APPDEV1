const greet = name => "Hello from the other side, " + name; // implicit return
const square = n => n * n;               // implicit return
 
const sayHi = () => {
  console.log("Hello pooo!~");
};

console.log(greet("Rosie"));
console.log(square(16));
sayHi();
