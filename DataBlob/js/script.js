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

let init = function() {
    emailjs.init("user_9od2hNmlxgAWyklC3gCHa");
};
init();

let form = document.querySelector("#contact form");
let textarea = document.querySelector("#contact textarea");
let e_mail = document.querySelector("#contact input[type=email]");
let satisfaction = document.querySelector("#contact select");
var success_msg = document.querySelector("#success-msg")
var close_success = document.querySelector("#success-msg i");

close_success.addEventListener("click", function() {
    success_msg.style.display = "none";
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let alert_msg = "Thank you for sending us feedback";
    var to_name = "Alp Niksarlı";
    var from_name = e_mail.value ? e_mail.value : "Anonymous";
    var message = `The client is ${satisfaction.value}.\n${textarea.value}`;       
    function sendMail (params) {
        var tempParams = {
            from_name: from_name,
            to_name: to_name,
            message: message,
        }
        emailjs.send("service_83wje1h","template_4x1bhyp",tempParams)
        .then(function(res) {
            if (res.status == 200) {
                console.log("Feedback sent successfully");
            }
        })
    }
    success_msg.style.display = "block";
    sendMail();
    e_mail.value = "";
    textarea.value = "";
    satisfaction.value = "pretty satisfied";
})

