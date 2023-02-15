/*      Form script     */

/*      Main page script        */

const mobileIcon = document.getElementById("mobileIcon");
const mobileNav = document.getElementById("mobileNav");

if (mobileIcon === null) {
    console.log("leri");
}

mobileIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    mobileNav.classList.toggle("hide");
    if (mobileNav.classList.contains("show")) {
        // document.body.style.overflowY = "hidden";
        document.documentElement.style.overflowY = "hidden";
    } else {
        // document.body.style.overflowY = "scroll";
        document.documentElement.style.overflowY = "scroll";
    }
});
