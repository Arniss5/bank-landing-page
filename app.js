const burgerIcon = document.querySelector(".burger-icon")
const burgerNav = document.getElementById("burger-nav")
burgerIcon.addEventListener("click", toggleBurgerNav)

// console.log(burgerIcon)



function toggleBurgerNav() {
    console.log("click")
    burgerIcon.classList.toggle("fa-bars")
    burgerIcon.classList.toggle("fa-xmark")
    burgerNav.classList.toggle("hamburger-nav")
}