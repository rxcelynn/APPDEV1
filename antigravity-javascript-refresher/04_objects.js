const aboutMe = {
  name: "Rocelyn",
  age: 22,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi my name is ${this.name}, age ${this.age}.`);
  },
  logDetails: function () {
    console.log(`Hobby: ${this.hobby}, Age: ${this.age}, Course: ${this.course}`);
  }
};
 
aboutMe.hobby = "Reading";
aboutMe.introduce();
aboutMe.logDetails();
