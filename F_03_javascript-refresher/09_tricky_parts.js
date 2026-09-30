console.log(20 == "20");   // true
console.log(20 === "20");  // false
 
let notDefined;
let empty = null;
 
console.log(notDefined); // undefined
console.log(empty);      // null

const obj = {
  name: "Rocelyn",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};
 
obj.regularMethod(); // "Rocelyn"     - this is set by how the function is called (obj.regularMethod())
obj.arrowMethod();   // undefined  - arrow functions borrow "this" from where they were written, not from obj
 
const original = [5, 6, 7];
 
const copyByReference = original;
copyByReference.push(8);
console.log(original); // [5, 6, 7, 8] - same array in memory, so both names see the change
 
const copyBySpread = [...original];
copyBySpread.push(9);
console.log(original);     // [5, 6, 7, 8]    - untouched by the spread copy
console.log(copyBySpread); // [5, 6, 7, 8, 9] - its own separate array
