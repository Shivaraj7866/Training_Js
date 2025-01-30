const nums: Array<number> =[1,2,3,4]
const names: Array<string> =["smith","faulkner","tony","steve"]
console.log(nums)

function identity(val:boolean | number){
    return val ;
}

function identity2(val:any): any{
    return val ;
}

//generics gives uniqness for the functions
function identity3<Type>(val:Type):Type{
    return val ;
}
function identity4<h>(val:h):h{
    return val ;
}

console.log(identity3("generics are awsome"))

function getProducts<T>(products:T[]):T{
    return products[1]
}
let val=getProducts
console.log(val.length)