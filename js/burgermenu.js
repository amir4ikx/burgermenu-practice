let doc = document 
let menu = doc.querySelector(".burgermenu-wrap")
let pullOut = doc.querySelector(".pull-out-menu")

menu.onclick = () => {
    menu.classList.toggle("burgermenu-clicked")
    pullOut.classList.toggle("pull-out-non-active")
    let isPullOutActive = pullOut.classList.contains("pull-out-non-active")
    if (isPullOutActive === true) {
        doc.body.style.overflow = ""
    }
    else{
        doc.body.style.overflow = "hidden"
    }
}