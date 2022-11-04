const navegation = document.querySelector("nav ul")
const menu = document.querySelector(".menu")
const menuImage = document.querySelector(".menu img")

menu.addEventListener("click", function() {
    menuShow()
})

function menuShow() {
    navegation.classList.toggle("active")

    if(menuImage.getAttribute("src") === "image/open.svg") {
        menuImage.setAttribute("src", "image/close.svg")
    }
    else {
        menuImage.setAttribute("src", "image/open.svg")
    }
}