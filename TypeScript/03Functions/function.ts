//string
    // function getString(ironMan: string){

    //     return ironMan.toUpperCase() + 5 ;

    // }

    // let hi=getString("the avenger")
    // console.log(hi)

    function str(isString:string) : string{
            return isString.toUpperCase()
    }

    console.log(str("hi"))

// //number

    function getNum(number:number){
        return number.toString() + 25 ;   
    }

    let num=getNum(25)
    console.log(num)

// //boolean and default parameter

    // function bool(name:string,email:string,isLoggedIn:boolean = true ){

    //     return [
    //         "name", name,
    //         "email", email,
    //         "isLoggedIn" ,isLoggedIn
    //     ]
    // }

    // let multiBool=bool("shivaraj","s@s.com",false)

    // console.log(multiBool)

    function bool(name:string,age:number,isLoggedIn:boolean=true) : any{
        return `my name is ${name} and the age is ${age} also i loggedIn ${isLoggedIn}`
    }

// export {}

function isNum(num : number) : number{

    // return "hi"
    return num + 7 ;
}

console.log(isNum(5))

//conditional rendering
    
    function getVal(value:number) : boolean | string{
            if(value > 5) return true
            else return "200 k"
    }

    let condition = getVal(5)
    console.log((condition)) ;

//in case of array methods

    let heros=["IronMan","spiderMan","captainMarvel","Thor"]

    console.log(heros.map((hero) : string => {
        return `hero is ${hero}` ;
    }))

    console.log(heros)

//printing error in console

    function consoleError(errMsg : string) : void{ //void returns nothing
        console.log(errMsg) ;
    }

    console.log(consoleError("hi this is errMsg from console"))

    function HandleError(errMsg : string) : never{ //never dont returns anything
        throw new Error(errMsg) ;
    }

    HandleError("hi this is handleErrMsg in console")