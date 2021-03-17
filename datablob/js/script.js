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