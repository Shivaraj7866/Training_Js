
gsap.from("#page1 #box",{
    scale:0.1,
    delay:0.5,
    duration:1,
    rotate:-360
})
// gsap.from("#page2 #box",{
//     scale:0.1,
//     delay:2,
//     duration:1,
//     rotate:360
// })

gsap.from("#page2 h1",{
    opacity:0,
    x:500,
    opacity:0,
    duration:1,
    scrollTrigger:"#page2 h1"
})

gsap.from("#page2 h2",{
    opacity:0,
    x:-500,
    opacity:0,
    duration:1,
    scrollTrigger:"#page2 h2"
})

gsap.from("#page3 #box",{
    opacity : 0,
    scale:0.1,
    duration:1,
    rotate:-720,
    scrollTrigger:"#page3 #box"
})