const values = [0, "", "AppDev1", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});
// [] and {} are truthy — only the 6 falsy values above are falsy

const username = "Rosie1201";
const password = "pw123--";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true
 
console.log("" || "default");        // "default" (first truthy)
console.log(username && "Helloooo!");  // "Helloooo!" (both truthy)
console.log(!canLogIn);                // false
