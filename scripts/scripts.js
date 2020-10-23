const menuSwitch = document.getElementById("menu-switch");
const menu = document.getElementById("menu")
const modeSwitch = document.getElementById("checkbox")
const blackLogo = document.querySelector(".black_logo")
if (localStorage.getItem("mode") === null){
    localStorage.setItem("mode", "dark")
}
let mode = localStorage.getItem("mode");
if (mode === "light"){
    document.querySelectorAll("*").forEach(element => {
        element.classList.toggle("light")
    })   
}
menuSwitch.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.querySelector(".header__logo").classList.toggle("active");
})
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        menuSwitch.click()
    },4000)
    setTimeout(()=>{
        document.querySelectorAll("*").forEach(element  => {
            element.style.opacity = "100%"
        })
        document.getElementById("logo").style.display = "none"
    },1500)
})
modeSwitch.addEventListener("click", () => {
    document.querySelectorAll("*").forEach(element => {
        element.classList.toggle("light")
    })
    console.log(mode)
    if (mode === "dark"){
        localStorage.setItem("mode", "light")
    } else{
        localStorage.setItem("mode", "dark")
    }
    mode = localStorage.getItem("mode")
})

alert("Hola!")