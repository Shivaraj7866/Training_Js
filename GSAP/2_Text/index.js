// gsap.to("h1",{
//     color:"red",
//     duration:2,
//     delay:1,
// })

gsap.from("h1",{
    y:50,
    color:"red",
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.3 // forward
})

// gsap.to("h1",{
//     y:50,
//     color:"red",
//     duration:2,
//     delay:1,
//     opacity:0,
//     stagger:-1 // backward
// })

gsap.to(".box",{
    x:1200,
    duration:0.5,
    delay:1,
    rotation:360,
    scale:1.2,
    borderRadius:"50%",
    // repeat:-1,//-1 - continuesly,1 - 2times,
    yoyo:true // end to start 
})

gsap.to(".box",{
    y:400,
    duration:0.5,
    delay:1.5,
    rotation:360,
    scale:1.2,
    borderRadius:"0%",
    marginLeft:"20px",
    // repeat:-1,//-1 - continuesly,1 - 2times,
    yoyo:true
})

gsap.to(".box",{
    x:0,
    duration:0.5,
    delay:2,
    rotation:360,
    scale:1.2,
    borderRadius:"50%",
    // repeat:-1,//-1 - continuesly,1 - 2times,
    yoyo:true
})

gsap.to(".box",{
    y:0,
    duration:0.2,
    delay:2.5,
    rotation:360,
    scale:1.2,
    marginLeft:"20px",
    // borderRadius:"50%",
    // repeat:-1,//-1 - continuesly,1 - 2times,
    yoyo:true
})

//Here the problem is we have to calculate the delatime for each animation to avoid this calculation 

//we have to use "gsap.timeline()"

