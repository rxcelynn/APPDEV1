if (true) {
  let message = "This is inside the block";
  console.log(message);
}

try {
  console.log(message);
} catch (error) {
  console.log("message is not accessible outside the block");
}

function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const firstCounter = createCounter();
const secondCounter = createCounter();

console.log(firstCounter()); // 1
console.log(firstCounter()); // 2
console.log(secondCounter()); // 1