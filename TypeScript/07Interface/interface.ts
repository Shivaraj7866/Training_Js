// interface User2 {
//     readonly Dbid : number
//     email:string
//     userId:number
//     startTrial(): string
//     getCoupon(coupanName:string,value:number) : number 
// }
 
// let Shivaraj : User2 ={
//     Dbid :12345,
//     email:"sh@gmail.com",
//     userId:142,
//     startTrial:()=>{
//         return "hi this is shivaraj" ;
//     },
//     getCoupon :(coupanName,value)=>{
//         console.log(`the couponName is${coupanName} and its value is ${value}`)
//         return 123456789 ;
//     }
// }

// console.log(Shivaraj.startTrial())
// console.log(Shivaraj.getCoupon("shivaraj",12345))

interface User2 {
    readonly DbId: number
    userId : number
    email : string
    startTrial() : string
    getCoupon(coupanName:string,value:number) : number 
}

let ajayKarthik : User2 ={
    DbId:123,
    userId:143,
    email:"a@gmail.com",
    startTrial:()=>{
        return 'hi,ajay'
    },
    getCoupon(coupanName, value) {
        console.log(`coupanName is ${coupanName} and value is ${value}`)
        return 20 ;
    },
}

console.log(ajayKarthik.startTrial())

export {}