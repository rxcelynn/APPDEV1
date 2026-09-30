let favoriteFoods = ["Ponkan", "Fried Chicken", "Ice Cream"];
favoriteFoods.push("Cake"); //  ["Ponkan", "Fried Chicken", "Ice Cream", "Cake"];
favoriteFoods.shift(); // ["Fried Chicken", "Ice Cream", "Cake"];
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food + " so so much!");
console.log(liked);
