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

//  swiper JS (Works after refresh)

const mySwipper = document.getElementById("mySwipper");
const swiperWrapper = document.getElementById("swiperWrapper");
const swiperSlide1 = document.getElementById("swiperSlide1");
const swiperSlide2 = document.getElementById("swiperSlide2");
const swiperSlide3 = document.getElementById("swiperSlide3");
const swiperScrollbar = document.getElementById("swiperScrollbar");

if (window.matchMedia("(max-width: 800px)").matches) {
    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
} else {
    mySwipper.classList.remove("mySwiper");
    mySwipper.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlide1.classList.remove("swiper-slide");
    swiperSlide2.classList.remove("swiper-slide");
    swiperSlide3.classList.remove("swiper-slide");
    swiperScrollbar.classList.remove("swiper-scrollbar");
}
