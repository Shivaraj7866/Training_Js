type Greeting={
    name?:string
    courseCount:number
    isLoggedIn:boolean
}
const Greet = (props : Greeting) => {
  return (
    <div>
      {
        props.isLoggedIn ? <h2>Hi, {props.name}! welcome to React_Typescript series and you have {props.courseCount} courses</h2> : <h1>welcome home</h1>
      }
    </div>
  );
};

export default Greet;
