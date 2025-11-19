/* function display() {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#c2c2c2ff";

    document.querySelectorAll(".card").forEach(card => {
        card.style.backgroundColor = "#151515";
        card.style.color = "#c2c2c2ff";
    })

    document.getElementById("rightPanel").style.backgroundColor = "#111";


} */

//Get Elements
let navBarMode = document.getElementById("navBar");

document.getElementById("btnDark").addEventListener("click", function (darkmode) {
    document.body.style.backgroundColor = "#111";
    document.getElementById("navBtn").style.backgroundColor = "gray";
    document.getElementById("navSearch").style.backgroundColor = "gray";
    for (x = 0; x <= 3; x++)
        document.getElementsByClassName("card")[x].style.backgroundColor = "#111";
    for (z = 0; z <= 6; z++)
        document.getElementsByClassName("text")[z].style.color = "white";

    if (navBarMode.classList.contains("bg-white")) {
        navBarMode.classList.replace("bg-white", "bg-dark")
    };
})


document.getElementById("btnLight").addEventListener("click", function (darkmode) {
    document.body.style.backgroundColor = "white";
    document.getElementById("navBtn").style.backgroundColor = "#ffffffff";
    document.getElementById("navSearch").style.backgroundColor = "#ffffffff";
    for (x = 0; x <= 3; x++)
        document.getElementsByClassName("card")[x].style.backgroundColor = "#ffffffff";
    for (z = 0; z <= 6; z++)
        document.getElementsByClassName("text")[z].style.color = "#2b2b2bff";
    if (navBarMode.classList.contains("bg-dark")) {
        navBarMode.classList.replace("bg-dark", "bg-white")
    };
})