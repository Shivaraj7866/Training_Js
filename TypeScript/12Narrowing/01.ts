function narrow(val : string | number) : string | number {
    if(typeof val === "string") return val.toUpperCase()
    return (val+6).toFixed()
}

console.log(narrow("shivaraj"))
console.log(narrow(6.9999))

function nullNarrow(val: string | null) {
    if(!val) {
        console.log("please provide an id");
        return "did you provided null?"
    }
    return val.toUpperCase()
}

console.log(nullNarrow(null))

function Narrow2(val : string | string[] | null){
    if(val){
        if(typeof val === "object"){
            for(const s of val) console.log(s)
        }
        else if(typeof val === "string") console.log(val)
    }
    return console.log("please dont provide null")
}
let arr=["1","2","3","4","5"]
Narrow2(null)