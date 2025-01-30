let score:number | string | boolean= 334

score="hi";

score=true

console.log(score)

type User1={
    name : string
    id:number
}

type Admin={
    Username : string
    id:number
}

let shivaraj : User1 | Admin = {name : "hitesh",id:334}

shivaraj={Username:"shiva",id:335}


// function getDbId(id : string | number ){
//     console.log(`the id is ${id.toString()}`)
// }

function getDbId(id: number | string){
    if(typeof id === "number") return id.toExponential(5);
    else return id.toUpperCase() ;
}

console.log(getDbId("shivaraj"))
console.log(getDbId(2.3))

let one:number[]= [1,2,3,4,5]
let two:string[]=["1","2","3","4","5"]
let three: (number | string | boolean)[]=["1","2",3,"4",5,false]


