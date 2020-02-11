let toTopBtn = document.getElementById("toTopBtn");
let menu = document.getElementById("menu");
let heading = document.getElementById("heading");
let menuBtn = document.getElementById("menuBtn");

function toTop() {
    heading.scrollIntoView({
        behavior: "smooth"
    })
}
toTopBtn.addEventListener("click", toTop, false);

function mobileMenu () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuBtn.innerHTML = `&equiv;`;
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menuBtn.innerHTML = `&times;`;
    }
}
menuBtn.addEventListener("click", mobileMenu, false);