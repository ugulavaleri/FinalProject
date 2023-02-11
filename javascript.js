/*      Weather script     */

const VisibilityIndicator = document.getElementById("VisibilityIndicator");
const feelsLikeIndicator = document.getElementById("feelsLikeIndicator");
const humidityIndicator = document.getElementById("humidityIndicator");
const windIndicator = document.getElementById("windIndicator");
const tempIndicator = document.getElementById("tempIndicator");

const cityName = document.getElementById("cityName");
const currentdate = document.getElementById("currentdate");

const weatherDescription = document.getElementById("weatherDescription");
const currentWeatherIcon = document.getElementById("currentWeatherIcon");

const currentDate = () => {
    let today = new Date();
    let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
    let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${
        today.getMonth() + 1
    }`;
    let year = today.getFullYear();
    const todaysDate = `${day}/${month}/${year}`;
    return todaysDate;
};

const getData = async () => {
    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=41.7151&lon=44.8271&units=metric&appid=9bffa026da8cf56f97cacafee04b68d4"
        );
        if (!response.ok) {
            console.log(`${response.status}, ERROR!`);
        } else {
            const returnedData = await response.json();
            console.log(returnedData);
            setIndicators(returnedData);
        }
    } catch (error) {
        console.log(`${error} ERROR`);
    }
};
getData();

const setIndicators = (data) => {
    cityName.textContent = data.name.replaceAll("'", "");
    currentdate.textContent = currentDate();
    weatherDescription.textContent = data.weather[0].description;
    currentWeatherIcon.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    );
    currentWeatherIcon.style.width = "110px";
    VisibilityIndicator.textContent = data.visibility;
    feelsLikeIndicator.textContent = Math.round(data.main.feels_like);
    humidityIndicator.textContent = data.main.humidity;
    windIndicator.textContent = data.wind.speed;
    tempIndicator.textContent = Math.round(data.main.temp);
};

/*      Form script     */

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

//  'back to home' page function
const backToHome = document.getElementById("backToHome");
backToHome.addEventListener("click", () => {
    window.location.href = "index.html";
});
