const aboutMe = {
  name: "Rocelyn",
  age: 22,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi my name is ${this.name}, age ${this.age}.`);
  }
};
 
aboutMe.hobby = "Reading";
aboutMe.introduce();
