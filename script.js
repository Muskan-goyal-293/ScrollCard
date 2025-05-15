let cards = document.querySelectorAll(".common");
cards.forEach((card)=>{
    gsap.to(card,{
        opacity:0,
        scale:0.5,
        scrollTrigger:{
            trigger:card,
            scroller:"body",
            start:"top 15%",
            end:"bottom 15%",
            scrub:5,
        }
    })
})
