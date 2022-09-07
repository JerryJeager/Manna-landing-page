const menuIcon = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
const email = document.querySelector(".email")
const error = document.querySelector(".error")
let userEmail = email.value
console.log(userEmail)
// const header = document.querySelector(".header")
let lastScrollTop = 0
let scrollTop = window.pageYOffset || document.documentElement.scrollTop
// window.addEventListener("scroll", function(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop
//     if(scrollTop > lastScrollTop){
//         header.style.top = "-91px"
//     }else {
//         header.style.top = "0"
//     }
//     lastScrollTop = scrollTop
// })
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})
function fadeEffect(heightLimit, className){
    if(document.body.scrollTop > heightLimit || document.documentElement.scrollTop > heightLimit){
        document.querySelector(`.${className}`).style.display = "block"
    }
}
function flexedFadeEffect(heightLimit, className){
    if (document.body.scrollTop > heightLimit || document.documentElement.scrollTop > heightLimit) {
        document.querySelector(`.${className}`).style.display = "flex"
    }
}
window.addEventListener("scroll", function () { fadeEffect(800, "best-programs") })
window.addEventListener("scroll", function(){fadeEffect(1000, "weight-loss-card-bg")})
window.addEventListener("scroll", function(){flexedFadeEffect(1200, "weight-loss-plan")})
window.addEventListener("scroll", function(){fadeEffect(1600, "eating-regular-meals-info-bg")})