type advanceProp={
    //status : string
    status: "loading" | "successfull" | "error"
}
const AdvancProp = (props:advanceProp) => {

    let message

    switch(props.status){
        case "error" :  message="error occured in data";
        break ;
        case "loading" :  message="Loading...!";
        break ;
        case "successfull" :  message="data fetched successfully"
    }
    
  return (
    <div>
       <h2>status : {message}</h2> 
    </div>
  )
}

export default AdvancProp