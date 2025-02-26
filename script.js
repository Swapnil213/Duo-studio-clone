var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var boxes = document.querySelectorAll(".box");
var navelem = document.querySelectorAll("#nav h4");
var nav = document.querySelectorAll("#nav");
var navDisplay = document.querySelector("#purple");


document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 15 + "px";
    cursor.style.top = dets.y + 15 + "px";
})

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

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0f0d0d"
})

boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var image = elem.getAttribute("data-image");
        cursor.style.width = "300px"
        cursor.style.height = "250px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${image})`
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        cursor.style.backgroundColor = "#edbfff"
    })
})

navelem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        navDisplay.style.display = "block";
        navDisplay.style.opacity = 1;
    })
    elem.addEventListener("mouseleave", function () {
        navDisplay.style.display = "none";
        navDisplay.style.opacity = 0;
    })
})