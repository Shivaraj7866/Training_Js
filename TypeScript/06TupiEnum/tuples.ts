
// let myUser1:(string | number | boolean)[] = ["shiva",123,false]

let myUser1:[number,boolean,string]=[123,false,"strings"]

let rgb:[number,number,number]=[265,265,265]

type arr=[number,string]

let myUser2:arr = [1234,"shiva@gmail.com"]

myUser2[0]=3214
myUser2[1] = "abc@goll.com"

// myUser2.push(true)

console.log(myUser2)

enum Day{
    sunday=1,
    monday,
    tuesday=4,
    wed,
    thurseday,
    fri,
    sat,
    
}

let today: Day=Day.monday
console.log(today) //2
today =Day.thurseday
console.log(today) //6