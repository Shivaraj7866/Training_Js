//classes in javascript
//1.class declaration

class Person {

    //wherever instance of the this class created immediately constructor will gets called
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  //Here internally calcAge method attached to the prototype of the Person class (prototype and inheritance)
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

//Here explicitly(separately) greet method is attached for the prototype of the Person class
Person.prototype.greet=function(){
    console.log("Good morning"+" "+ this.name)
}

//Instance 1
const john = new Person("john", 1990, "male");
john.calcAge()
john.greet()
console.log(john);

//Instance 2
const merry = new Person("merry", 1992, "female");
merry.calcAge()
merry.greet()
console.log(merry);

//Instance 3
const jakkanna = new Person("jakkanna", 1995, "male");
console.log(jakkanna);
