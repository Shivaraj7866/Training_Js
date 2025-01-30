
let user={
    name:'shivaraj',
    course:'reacj js',
    email:'sh@gmsil.com',
    isLoggedIn:true
}

console.log(user.name)


function createCourses():{name: string,price:number}{
    return {
            name:"React js",
            price:399
    }
}

console.log(createCourses())


//"type" aliases

    type User={
        name:string;
        price:number;
    }

    function userCourse({name,price} : User){
        return {
            name:name,
            price:price
        }
    }
    console.log((userCourse({name:"React js",price:399})))

    // type User={
    //     name : string;
    //     isPaid : boolean;
    // }

    // function createUsers({name,isPaid}:User){
    //     return {
    //         name : name,
    //         isPaid : isPaid
    //     }
    // }

    // console.log(createUsers({name: "shiva",isPaid:true}))

    // type Pointer={
    //     x:number;
    //     y:boolean
    // }

    // function getNumber(pt:Pointer){

    //     return {
    //         x:pt.x,
    //         y:pt.y
    //     } 
    // }

    // console.log(getNumber({x:100,y:false}))

    type pointer={
        x:number
        y:boolean
    }

    function Pointer(pt:pointer){
        return {
            x:pt.x,
            y:pt.y
        }
    }
    console.log(Pointer({x:100,y:true}))
export {}