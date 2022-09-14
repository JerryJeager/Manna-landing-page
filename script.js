const menuIcon = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
// const email = document.querySelector(".email").value
const submit = document.querySelector(".submit-btn")
const error = document.querySelector(".error")
menuIcon.addEventListener("click", () => {
    menuIcon.style.position = "fixed"
    navbar.classList.toggle("change")
    document.querySelector(".links").classList.toggle("change")
    if (document.querySelector(".links").classList.contains("change") == false) {
        menuIcon.style.position = "sticky"
    }
})
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