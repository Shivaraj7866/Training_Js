//we can use "instanceOf" only in the case of using "new" keyword

function logVal(val: Date | string){
    if (val instanceof Date){
        console.log(val.toUTCString())
    }else{
        console.log(val.toUpperCase())
    }
}

logVal(new Date().toLocaleTimeString())