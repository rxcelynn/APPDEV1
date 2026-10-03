const raw = "  Rocelyn Lava  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); // "ROCELYN"
console.log(clean.includes("Lava")); // true
console.log(clean.slice(0, 5)); // "Rocel"
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("56"));   // 56
console.log((19.9999).toFixed(2)); // "20.00"
 
const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true
