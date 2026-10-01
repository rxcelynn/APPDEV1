const students = [
  { name: "Rosa", grade: 90 },
  { name: "Andrea", grade: 96 },
  { name: "Kurt", grade: 72 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Rosa", "Andrea"]
 
const andrea = students.find(s => s.name === "Andrea");
console.log(andrea); // { name: "Andrea", grade: 96 }
 
console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Andrea", "Rosa", "Kurt"]
