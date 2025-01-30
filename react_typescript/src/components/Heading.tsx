type ChindrenProp={
    children : string
}
const Heading = (props : ChindrenProp) => {
    
  return (
    <div>
        <h2>{props.children}</h2> 
    </div>
  )
}

export default Heading