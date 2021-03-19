/* Hiding and Showing the Menu */
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

/* Revealing Elements on Scroll */
window.sr = ScrollReveal();

/*
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
    delay: 1900
})

sr.reveal("#about .content h1,p", {
    origin: "top",
    distance: "300px",
    duration: 2000,
})


sr.reveal("#about .content img", {
    origin: "left",
    distance: "300px",
    duration: 2000,
})

sr.reveal("#about .content button", {
    delay: 1400,
    origin: "bottom",
    distance: "100px",
    duration: 1000,
})
*/

/* Adding Smooth Scrolling to Menu */

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
	updateURL: false, // Update the URL on scroll
});


/* Handling the valid and invalid cases in the form */

let form = document.querySelector("#contact form");
let textarea = document.querySelector("#contact textarea");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let msg = "Thank you for sending us feedback";
    if (textarea.content == false) {
        msg = "Please write feedback before sending";
    }
    alert(msg);
})



