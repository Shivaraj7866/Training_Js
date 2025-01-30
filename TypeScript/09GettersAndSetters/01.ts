
export class User4 {
    public name: string //we can access anywhere
    private email: string //we can access and modify only in the main class 
    protected courseCount: number = 4 //we can access only in main class and as well in sub classes but can't modify

    constructor(name: string, email: string) {
        this.name = name
        this.email = email

    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this.courseCount
    }

    //"set" returns nothing include void
    set getCourseCount(courseNum) {
        if (courseNum <= 2) throw new Error("course count should be more than two")
        this.courseCount = courseNum
    }

    private getTokens(): void {
        console.log("tokens deleted")
    }


}
class SubClass extends User4{
    isFamily:boolean=true
    changeCourseCount(){
        this.courseCount=5
    }
}

console.log(User4)

let hitesh=new User4("smith","smith@.dev")
// hitesh.courseCount =5
console.log(hitesh.name)
console.log(hitesh.getCourseCount)
console.log(User4)
console.log("Class :",hitesh.getAppleEmail)