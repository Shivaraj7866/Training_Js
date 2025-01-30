gsap.registerPlugin(ScrollTrigger);

//-----------1.start and end property--------------
//-----------2.changing classNames--------------

// gsap.to(".square1", {
//     x: `${window.innerWidth/2}`,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square1",
//         start: "top 20%",
//         end: ()=>  `+=${document.querySelector(".square1").offsetHeight}`,
//         markers:true,
//         toggleClass:"black"

//     }
// })

//-----------------3.Markers-------------
// gsap.to(
// ".square1",{
//     x:1000,
//     duration: 3,
//     scrollTrigger:{
//         trigger:".square1",
//         start:"top center",
//         toggleAction:"restart none none none",
//         //            onEnter onLeave onEnterback onLeaveback
//         markers:{
//             startColor:"red",
//             endColor:"blue",
//             fontSize:"2rem"
//         }

//     }
// }
// )

//------------4.toggleActions------------------
// gsap.to(
//     ".square1",{
//         x:600,
//         duration: 3,
//         scrollTrigger:{
//             trigger:".square1",
//             start:"top 50%",
//             end:"top 30%",
//             toggleActions:"restart pause resume complete",
//             //              play restart reset reverse resume pause complete none
//             //            onEnter onLeave onEnterback onLeaveback
//             markers:true

//         }
//     }
//     )

//-------------5.Scrub property-----------------

// gsap.to(
//     ".square1", {
//     x: 900,
//     duration: 5,
//     scrollTrigger: {
//         trigger: ".square2",
//         start: "top 70%",
//         end: "top 30%",
//         scrub:5,
//         toggleActions:"restart none none none",
//         pin : ".square1",
//         pinSpacing:true,
//         markers:true
//     }
// }
// )

//-------------------TimeLine--------------------------

// gsap.to(".square1",
//     {
//         x: 600,
//         rotation:360,
//         duration: 3
//     }
// )
// gsap.to(".square1", { y: 200, duration: 3, delay: 3 })
// gsap.to(".square1", { x: 0, duration: 3,rotation:-360, delay: 6 })
// gsap.to(".square1",{y:400,duration:2,delay:9})
// gsap.to(".square1",{x:600,duration:2,delay:11})
// gsap.to(".square1",{y:200,duration:2,delay:13})
// gsap.to(".square1",{x:0,duration:2,delay:15})
// gsap.to(".square1",{x:600,duration:2,delay:17})
// gsap.to(".square1",{y:0,duration:2,delay:19})
// gsap.to(".square1",{x:0,duration:2,delay:21})

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".square1",
        start:"top 80%",
        end:"bottom 30%",
        markers:true,
        scrub:1
    }
})

tl.to(".square1", { x: window.innerWidth/2,rotaion:360 ,duration: 2 })
    .to(".square1", { y: 100, duration: 3 })
    .to(".square1", { x: 0, duration: 2 })
    .to(".square1", { y: 200, duration: 2 })
    .to(".square1", { x: window.innerWidth/2, duration: 2  })
    .to(".square1", { y: 0, duration: 2  })
    .to(".square1", { x: 0, duration: 2  })