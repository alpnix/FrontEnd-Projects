window.sr = ScrollReveal();

sr.reveal(".navbar", {
    duration: 1200,
    origin: "bottom",
    distance: "15px"
})


sr.reveal(".showcase-left", {
    duration: 2000,
    origin: "right",
    distance: "300px"
})

sr.reveal(".showcase-right", {
    duration: 2000,
    origin: "left",
    distance: "300px"
})

sr.reveal("#graph", {
    duration: 1500,
    origin: "top",
    distance: "300px"
}) 

sr.reveal("#about-articles h2", {
    duration: 1500,
    origin: "left",
    distance: "60px"
})

sr.reveal("#about-articles p", {
    duration: 1500,
    origin: "bottom",
    delay: 2000,
    distance: "80px"
})