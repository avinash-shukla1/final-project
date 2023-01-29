function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            duration:2,
            pin: true,
            markers: true,
        }
    })
    tl.to("#circle #btm img", {
        rotate: "-180deg",
        scale: .6,
        duration:5,
        stagger: .1,
        ease: Power1
    },"ab")
    .to("#circle #top img", {
        scale: .6,
        duration:5,
        ease: Power1
    },"ab")
    .to("#home #gallery", {
        bottom: "-100%",
        ease: Power1,
        duration:1
    },"ab")
    .to("#pink", {
        rotate: "0",
        bottom: 0,
        duration:8,
        ease: Power1,
    },"ab")
    .to("#cimage img", {
        scale: 0,
        duration:5,
        ease: Power1
    },"ab")
    .to("#centerimg h5", {
        opacity: 0,
        duration:2,
        ease: Power1
    },"ab")
    .to("#circp", {
        top: "50%",
        scale: 2,
        duration:3,
        ease: Power1
    },"ab")
    .to("#smcircle",{
        scale:0.6,
        duration:4,
        ease:Power1
    },"abcd")
    .to("#circle",{
        scale:0.1,
        duration:4,
        ease:Power1
    },"abcd")
    .to("#sidepurple",{
        top:"0%",
        duration:3,
        ease:Power1,
    },"abc")
    .to("#sidepurple", {
        top: "-70%",
        delay: 2,
        ease: Power1,
    },"abc")
    
    }
    
    function timelineTwo() {
        gsap.set("#soverlay #stop .circle",
         {top: "150%",
          scale: .5})
        
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#second",
                start: "top top",
                pin: true,
                scrub: 1,
                markers: true
            }
        })
    tl2.to(".circle", {
           top: "50%",
           scale: 1,
           duration:15,
           ease: Power1,
        stagger: .1
         })
    
        .to(".circle",{
    top:"50%",
    duration:15,
    ease:Power1,
    scale:1,
    left:"50%"
        })
        .to(".circle", {
            scale: .7,
            duration:15,
            ease: Power1
        })
        .to(".circle", {
            scale: 10,
            duration:15,
            ease: Power1
        })
        .to("#stop h1", {
            x: "-250%",
            delay:1,
            duration: 40,
            ease: Power1
        })
        .to("#stop .pi", {
    
            background:`linear-gradient(to right, #ad8d96, #a79ad4)`,
       duration:3,
            ease: Power1
        }, "abc")
        .to("#secondbtm h3:nth-child(1)", {
            duration:10,
            opacity:0,
            ease:Power1,
        })
        .to("#secondbtm h3:nth-child(2)", {
            duration:10,
            opacity:1,
            ease:Power1,
        })
        .to(".blocks", {
            top:'0%',
            opacity:'1',
            duration:15,
            ease:Power0,
        })
        .to("#line1", {
            duration:5,
            left:'-15%',
            display:"flex",
            ease:Power0,
        })
        .to("#line2", {
            duration:5,
            left:'-10%',
            display:"flex",
            ease:Power0,
        })
    }   

    
    timelineOne();
    timelineTwo();
    
    
    
    
    