const menuIcon = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
// const email = document.querySelector(".email").value
const submit = document.querySelector(".submit-btn")
const error = document.querySelector(".error")
let lastScrollTop = 0
let scrollTop = window.pageYOffset || document.documentElement.scrollTop
// const header = document.querySelector(".header")
/*window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop){
        header.style.position = "fixed"
        header.style.top = "-91px"
    }else {
        header.style.top = "0"
    }
    lastScrollTop = scrollTop
})*/
menuIcon.addEventListener("click", () => {
    menuIcon.style.position = "fixed"
    navbar.classList.toggle("change")
    document.querySelector(".links").classList.toggle("change")
    if (document.querySelector(".links").classList.contains("change") == false) {
        menuIcon.style.position = "sticky"
    }
})
function fadeEffect(heightLimit, className, displayType) {
    if (document.body.scrollTop > heightLimit || document.documentElement.scrollTop > heightLimit) {
        document.querySelector(`.${className}`).style.display = `${displayType}`
    }
}
window.addEventListener("scroll", function () { fadeEffect(800, "best-programs", "block") })
window.addEventListener("scroll", function () { fadeEffect(1000, "weight-loss-card-bg", "block") })
window.addEventListener("scroll", function () { fadeEffect(1200, "weight-loss-plan", "flex") })
window.addEventListener("scroll", function () { fadeEffect(1600, "eating-regular-meals-info-bg", "block") })
submit.addEventListener("click", function (evt) {
    let email = document.querySelector(".email").value
    let emailAddress = []
    let emailExtension = []
    for (letters of email) {
        emailAddress.push(letters)
    }
    if (emailAddress.includes("@") == true) {
        for (let i = 0; i < 4; i++) {
            emailExtension.push(emailAddress.pop())
        }
        if (emailExtension.join('') == "moc.") {
            return true
        } else {
            error.textContent = "invalid email address!"
            evt.preventDefault()
            return false
        }
    }
    else if(emailAddress.includes("@") == false && emailAddress.length > 0) {
        error.textContent = "invalid email address!"
        evt.preventDefault()
        return false
    }
    else {
        error.textContent = "Please fill in your email address!"
        evt.preventDefault()
        return false
    }
})