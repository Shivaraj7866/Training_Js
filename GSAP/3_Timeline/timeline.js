let tl = gsap.timeline()
console.log(tl)

// tl.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotation:360
// })
// tl.to("#box2",{
//     x:1200,
//     duration:2,
//     rotation:360
// })
// tl.to("#box3",{
//     x:1200,
//     duration:2,
//     rotation:360
// })

tl.from(".nav h2",{
    opacity:0,
    y:-20,
    delay:0.5,
    duration:1,
    color:"red"
})

tl.from("h4",{
    opacity:0,
    y:-20,
    duration:1,
    stagger: 0.3
})

tl.from("h1",{
    opacity:0,
    y:20,
    duration:1,
    scale:0.2,
    stagger: 0.3
})