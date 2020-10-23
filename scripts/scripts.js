// Declarando las variables
const menuSwitch = document.getElementById("menu-switch"); // El menú desplegable
const menu = document.getElementById("menu") // El menú de elementos
const modeSwitch = document.getElementById("checkbox") // El Switch del modo DARK/LIGHT
// Si todavía no hay ningun modo, se va a poner en dark por defecto
if (localStorage.getItem("mode") === null){
    localStorage.setItem("mode", "dark")
}
// Obtengo el modo del local localStorage
let mode = localStorage.getItem("mode");
// Si el modo es Light, obtengo todos los elementos y le añado esa clase.
if (mode === "light"){
    document.querySelectorAll("*").forEach(element => {
        element.classList.toggle("light")
    })   
}
// Añado un escuchador de eventos al switch del menu, para que cambie su estado. Si está activado, se desactiva. Si esta desactivado, se activa.
menuSwitch.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.querySelector(".header__logo").classList.toggle("active");
})
// Cuando se de click al boton del modo, selecciono todos los elementos y le quito o le doy la clase light. 
modeSwitch.addEventListener("click", () => {
    document.querySelectorAll("*").forEach(element => {
        element.classList.toggle("light")
    })
    // Si el modo es light, entonces asigno el valor de dark al modo de Local Storage. Si el modo es dark, le doy el modo Dark.
    if (mode === "dark"){
        localStorage.setItem("mode", "light")
    } else{
        localStorage.setItem("mode", "dark")
    }
    // Reasigno la variable mode para seguir con el flujo del programa
    mode = localStorage.getItem("mode")
})


// Funcion para sacar el logo de la pantalla de inicio
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("visited") === null) {
        // Espero 4 segundos y fuerzo un click en el menu, para dar a entender al usuario que el logo es un elemento clickeable.
        window.setTimeout(() => {
            menuSwitch.click()
        },4000)
        // Espero 1.5 segundos, y le doy la opacidad a todo el contenido. Al menu, que estaba ocultando la pantalla, le doy un display none.
        setTimeout(() => {
            document.querySelectorAll("*").forEach(element  => {
                element.style.opacity = "100%"
            })
            document.getElementById("logo").style.display = "none";  
        }, 1500)
        localStorage.setItem("visited", "true");
    } else {
        document.querySelectorAll("*").forEach(element  => {
                element.style.opacity = "100%"
        })
        document.getElementById("logo").style.display = "none"
    }
})