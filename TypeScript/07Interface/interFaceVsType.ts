
// interface User2 {
//     readonly DbId: number
//     userId : number
//     email : string
//     startTrial() : string
//     getCoupon(coupanName:string,value:number) : number 
// }

// //1.add new values 
// interface User2{
//     isLoggedIn:boolean
// }

// //2."extends" keyword
// interface Admins extends User2{
//     role:string
// }

// let ajayKarthik2 : Admins ={
//     DbId:123,
//     userId:143,
//     role:"admin",
//     isLoggedIn:true,
//     email:"a@gmail.com",
//     startTrial:()=>{
//         return 'hi,ajay' ;
//     },
//     getCoupon(coupanName, value) {
//         console.log(`coupanName is ${coupanName} and value is ${value}`)
//         return 20 ;
//     }
// }

interface User2{
    name: string
    email:string
    userId:number
    straTrial():string
    getCoupon(coupanName:string,value:number): number
}

//1.adding new values

interface User2{
    isLoggedIn?:boolean ;
}

//2.extends keyword

interface admin extends User2{
    readonly loginCount:number
}

let ajayKarthik: admin ={
    name:"shiva",
    email:"s@.dev",
    userId:123,
    loginCount:5,
    // isLoggedIn:true,
    straTrial:()=>{
        return "startTrial executed";
    },
    getCoupon(coupanName, value) {
        console.log(`couponName is ${coupanName} and value is ${value}`)
        return 25
    },
}

// console.log(ajayKarthik.loginCount=10)