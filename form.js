//  selected to check all input value
const Email = document.getElementById("Email");
const country = document.getElementById("country");
const City = document.getElementById("City");
const CountryCode = document.getElementById("CountryCode");
const registerForm = document.getElementById("registerForm");

//  selected to change colors
const SignUpTitle = document.getElementById("SignUpTitle");
const input2 = document.getElementsByTagName("input");
const content = document.getElementById("content");
const formBox = document.getElementById("formBox");

//  after click title
const valueCheck = document.getElementById("valueCheck");
valueCheck.style.textAlign = "center";
if (valueCheck === null) {
    console.log("leri");
}
valueCheck.style.marginTop = "20px";

const success = () => {
    valueCheck.textContent = "successfully sent";
    valueCheck.style.color = "rgb(76, 189, 76)";

    // change colors
    SignUpTitle.style.color = "white";
    content.style.backgroundColor = "#1F2327";
    formBox.style.backgroundColor = "#292E33";
    formBox.style.boxShadow = "none";
};
const fail = () => {
    valueCheck.textContent = "All fields must be filled";
    valueCheck.style.color = "red";
};

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
        Email.value == "" ||
        country.value == "" ||
        City.value == "" ||
        CountryCode.value == ""
    ) {
        fail();
    } else {
        success();
    }
    Email.value == "";
    country.value == "";
    City.value == "";
    CountryCode.value == "";
});

// //  'back to home' page function
const backToHome = document.getElementById("backToHome");
backToHome.addEventListener("click", () => {
    window.location.href = "index.html";
});
