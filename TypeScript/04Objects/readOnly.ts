type User={
    readonly _id: string // we cannot modify the _id because of readonly
    name: string
    email: string
    isActive: boolean
    cardDetails?: number //this "?" symbol makes cardDetails optional

}

let myUser : User ={
    _id: "12345",
    name: "S",
    email: "s@gmail.com",
    isActive: true,

}

// myUser._id="3214" 
myUser.name="SHIVA"
myUser.email="shi@lco.dev"
myUser.isActive=false

// console.log(myUser)

// type cardNumber={
//     cardnumber:string
// }

// type cardDate={
//     cardDate: string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv : number
// }

// function debitInfo(num : cardDetails) : string | number{
//         return `the card details contains ${num.cardnumber} number and ${num.cardDate} date also cvv ${num.cvv}`
// } 

// console.log(debitInfo({cardnumber:"1233",cardDate:"12-05-2023",cvv:321}))

type cardNumber={
    cardNum:number
}
type cardDate={
    cardDate:string
}
type cardDetails = cardNumber & cardDate & {cvv:number}

function debitInfo(num:cardDetails) : string | number{
    return `${num.cardNum} and ${num.cvv} and ${num.cardDate}`
}

console.log(debitInfo({cardNum:12345,cardDate:"12-05-2000",cvv:321}))