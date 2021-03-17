window.sr = ScrollReveal();

let menuBtn = document.querySelector("#menuBtn");
let menu = document.querySelector("#side-nav");

let menu_pos = "-300px";
menu.style.right = menu_pos;
menuBtn.addEventListener("click", function (e) {
    let right = menu.style.right;
    if (right == menu_pos) {
        menu.style.right = "0px";
    }
    else {
        menu.style.right = menu_pos;
    }
    console.log(right)
})

sr.reveal(".brand-logo", {
    origin: "bottom",
    duration: 1500,
    distance: "50px"
})

sr.reveal("header .content img", {
    origin: "top",
    distance: "300px",
    duration: 2000,
    delay: 800
})

sr.reveal("header .content h1", {
    origin: "left",
    distance: "300px",
    duration: 2000,
    delay: 800
})

sr.reveal("header .content p", {
    origin: "left",
    distance: "300px",
    duration: 2000,
    delay: 800
})

sr.reveal("header .content button", {
    origin: "bottom",
    distance: "100px",
    duration: 2000,
    delay: 2500
})


