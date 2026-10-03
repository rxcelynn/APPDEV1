function divide(a, r) {
  if (r === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / r;
}
 
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

const user = { name: "Rocelyn", age: 22, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Rocelyn","age":22,"isStudent":true}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Rocelyn"
console.log(typeof jsonString, typeof parsedUser); // string object
