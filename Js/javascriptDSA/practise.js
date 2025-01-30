
//Constructor function
const Person = function(name,gender,birthYear){
    this.name=name;
    this.gender=gender;
    this.birthYear=birthYear;
}

Person.prototype.calcAge=function(){
    let age = new Date().getFullYear() - this.birthYear
    console.log(age)
}

//Instances of the Person constructor function
const john = new Person('john','male',1985)
// john.calcAge()
console.log(john)

const merry = new Person('merry','female',1995)
// merry.calcAge()
console.log(merry)

const jakkanna = new Person('jakkanna','male',1999)
// jakkanna.calcAge()
console.log(jakkanna)

let mark = {
    name:'mark',
    age:28,
    gender:'male'
}

//let mark = new Object()
//mark.name = 'mark'
//mark.age = 28
//mark.gender = 'male'

console.log(mark.hasOwnProperty("name"))
