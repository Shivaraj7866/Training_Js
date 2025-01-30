gsap.registerPlugin(ScrollTrigger)

gsap.defaults(
    { ease: "none", duration: 2 }
)


const tl = gsap.timeline()

tl.from(".panel1", { xPercent: -100 })
  .from(".panel2", { xPercent: 100 })
  .from(".panel3", { yPercent: -100 })

ScrollTrigger.create({
    animation:tl,
    trigger:"#container",
    start:"top top",
    end:"+=400",
    scrub:true,
    pin:true,
    aniticipatePin:1

})