function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
loco();

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 25%",
        end: "top 0",
        scrub: 3
    }
})

tl.to(".page1 h1", {
    x: -100
},'a')

tl.to(".page1 h2", {
    x: 100
}, 'a')

tl.to(".page1 .video", {
    width: "90%"
}, 'a')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -90%",
        end: "top -100%",
        scrub: 3
    }
})

tl2.to(".main", {
    backgroundColor: "#fff"
})