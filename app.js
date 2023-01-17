import {services, articles} from "./data.js"

const burgerIcon = document.querySelector(".burger-icon")
const burgerNav = document.getElementById("burger-nav")
const servicesContainer = document.getElementById("services-container")
const articlesContainer = document.getElementById("articles-container")


burgerIcon.addEventListener("click", toggleBurgerNav)


function toggleBurgerNav() {
    burgerIcon.classList.toggle("fa-bars")
    burgerIcon.classList.toggle("fa-xmark")
    burgerNav.classList.toggle("hamburger-nav")
}

let servicesEl = ""
services.forEach(service => {
    servicesEl += (
        `<div class="service">
            <img src="./images/${service.img}" alt="#" class="service-img">
            <h3>${service.title}</h3>
            <p>${service.text}</p>
        </div>`
    )
})

let articlesEl = ""
articles.forEach(article => {
    articlesEl += (
        `<article>
            <img src="./images/${article.img}" alt="banknotes">
            <div class="article-text">
                <div class="article-author">By ${article.author}</div>
                <h4>${article.title}</h4>
                <p>${article.text}</p> 
                </div>
        </article>`
    )
})

servicesContainer.innerHTML = servicesEl
articlesContainer.innerHTML = articlesEl
