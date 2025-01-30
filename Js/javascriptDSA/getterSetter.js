

//Accessor property are methods that gets or sets the property of an object

//getter - read object property value - using "get" keyword
//setter - set object property value - using "set" keyword

let john = {
    name:"John",
    birthYear:1990,
    AnnualSalary:120000,

    get getName(){
        return 'Mr. ' + this.name
    },

    set setName(val){
        if(val.length < 4){
            alert("Atleast 4 characters should be there")
        }else{
            this.name=val;
        }
    }
}

console.log(john.getName)
john.setName = "Joh"
console.log(john.getName)