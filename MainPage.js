/*      Main page script        */

//  dropdown menu
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

//  swiper JS  -- (If you manually reduce the resolution, swiper Works after refresh page)

const mySwipper = document.getElementById("mySwipper");
const swiperWrapper = document.getElementById("swiperWrapper");
const swiperSlide1 = document.getElementById("swiperSlide1");
const swiperSlide2 = document.getElementById("swiperSlide2");
const swiperSlide3 = document.getElementById("swiperSlide3");
const swiperScrollbar = document.getElementById("swiperScrollbar");

const insideSwiperBox = document.getElementById("insideSwiperBox");
const mobileVideoButton = document.getElementById("mobileVideoButton");

if (window.matchMedia("(max-width: 800px)").matches) {
    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
    insideSwiperBox.classList.remove("direction-column");
} else {
    mySwipper.classList.remove("mySwiper");
    mySwipper.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlide1.classList.remove("swiper-slide");
    swiperSlide2.classList.remove("swiper-slide");
    swiperSlide3.classList.remove("swiper-slide");
    swiperScrollbar.classList.remove("swiper-scrollbar");
}

/*  Frequently Asked question list   */
/*  If you manually reduce the resolution, you need to restart page for swiper. (another time click list items)   */

const questionItem = document.getElementsByClassName("questionItem");
const afterClickShow = document.getElementsByClassName("afterClickShow");
const dropDownIcon = document.getElementsByClassName("dropDownIcon");

for (let index = 0; index < afterClickShow.length; index++) {
    const element = questionItem[index];
    element.addEventListener("click", () => {
        afterClickShow[index].classList.toggle("showText");
        if (afterClickShow[index].classList.contains("showText")) {
            dropDownIcon[index].style.transform = "rotate(90deg)";
        } else {
            dropDownIcon[index].style.transform = "rotate(0deg)";
        }
        afterClickShow[index].classList.toggle("hideText");
    });
}

mobileVideoButton.addEventListener("click", () => {
    window.location.href = "./videos/HyperX Design.mp4";
});
