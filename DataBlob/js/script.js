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


/* Adding Smooth Scrolling to Menu */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        return false;
    });
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

