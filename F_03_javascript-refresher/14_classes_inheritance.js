class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi, I am " + this.name); }
}
 
class Student extends Person {
  study() { console.log(this.name + " is studying AppDev1."); }
}
 
const student = new Student("Andrea");
student.sayHello();
student.study();
