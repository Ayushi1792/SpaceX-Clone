let btn = document.querySelectorAll(".left button")

btn.forEach(b => {
    b.addEventListener("mouseover", () => {
        b.classList.add("active")
    })
    b.addEventListener("mouseleave", () => {
        b.classList.remove("active")
    })
})
let burger = document.querySelector(".bars")
let sidenav = document.querySelector("#sidenav")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("open")
    sidenav.classList.toggle("active")
})