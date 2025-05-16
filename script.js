tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub: "5",
}})

tl.to("#fanta",{
    top : "120%",
    left : "5%",
},'orange')

tl.to("#orange-cut",{
    top: "160%",
    left: "23%"
},'orange')

tl.to("#orange",{
    width:"15%",
    top: "160%",
    right: "13%"
},'orange')

tl.to("#leaf",{
    top: "110%",
    rotate:"130deg",
    left: "70%",
})

tl.to("#leaf2",{
    top: "110%",
    rotate:"130deg",
    left: "0%",
})

tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub: "5",
    markers: true,
}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left: "-50%",
    top: "100%"
},'ca')


tl2.from("#coca_cola",{
    rotate:"-90deg",
    top: "110%",
    left:"-100%"
},'ca')   

tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')

tl2.from("#pepsi",{
    rotate:"90deg",
    top:"110%",
    left:"100%",
},'ca')

tl2.to("#orange-cut",{
    left:"43%",
    top:"200%"
},'ca')

tl2.to("#fanta",{
    top:"210%",
    width:"35vw",
    left:"32.8%",
})