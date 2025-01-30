class User3{
    public name:string
    email:string
    private readonly city:string="banglore"
    constructor(name:string,email:string){
        this.name=name
        this.email=email

    }

    
}

let sayHi=new User3("shivaraj","s@gmail.com")

sayHi.email="shiva@dev.co"
console.log(sayHi)
// sayHi.city
// sayHi.city="sjdga"

// class User3 {
//   constructor(public name: string, private email: string) {}
// }
