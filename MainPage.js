/*      Main page script        */

const mobileIcon = document.getElementById("mobileIcon");
const mobileNav = document.getElementById("mobileNav");

mobileIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    mobileNav.classList.toggle("hide");
    if (mobileNav.classList.contains("show")) {
        document.documentElement.classList.add("scrollHide");
    } else {
        document.documentElement.classList.remove("scrollHide");
    }
});
