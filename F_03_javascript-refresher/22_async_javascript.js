function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Rocelyn", age: 22 });
  }, 1000);
}
 
fetchUserMock((user) => {
  console.log("The user is:", user);
});

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Rocelyn", age: 22 }), 1000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("The user is:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
 
showUser();
